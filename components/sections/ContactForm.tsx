"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  TextInput,
  Textarea,
  Button,
  Grid,
  Stack,
  Select,
  Modal,
  Group,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import styles from "@/styles/AppointmentForm.module.css";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  //   serviceType: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  //   serviceOptions?: Array<{ value: string; label: string }>;
  illustration?: string;
}

const CelebrationModal: React.FC<{ opened: boolean; onClose: () => void }> = ({
  opened,
  onClose,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (opened) {
      setShowConfetti(true);
      // Hide confetti after 2 seconds (short period)
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [opened]);

  return (
    <>
      {/* Full-screen confetti overlay */}
      {showConfetti && (
        <div className={styles.fullscreenConfetti}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={styles.confetti}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                animationDuration: `${1.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <Modal
        opened={opened}
        onClose={onClose}
        centered
        withCloseButton={false}
        size="md"
        className={styles.celebrationModal}
      >
        <div className={styles.modalContent}>
          <div className={styles.successIcon}>🎉</div>

          <Title order={2} className={styles.successTitle}>
            Message Sent Successfully!
          </Title>

          <Text className={styles.successMessage}>
            Thank you for reaching out to us! We'll get back to you within 24
            hours.
          </Text>

          <Button
            onClick={onClose}
            size="md"
            className={styles.successButton}
            mt="xl"
          >
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  //   serviceOptions = [
  //     { value: "water-treatment", label: "Water Treatment & Management" },
  //     { value: "plumbing", label: "Water Supply & Plumbing Works" },
  //     { value: "borehole", label: "Borehole Drilling & Installation" },
  //     { value: "consultation", label: "Consultation" },
  //     { value: "maintenance", label: "Maintenance & Repair" },
  //   ],
  illustration = "/images/amico-contact.png",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<ContactFormData>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      //   serviceType: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.length < 10 ? "Subject must be at least 8 characters" : null,
      //   serviceType: (value) => (!value ? "Please select a service type" : null),
      message: (value) =>
        value.length < 10 ? "Message must be at least 10 characters" : null,
    },
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Demo submission structure - replace with your actual submission logic
      await simulateAPICall(values);

      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(values);
      }

      // Show success notification
      notifications.show({
        title: "Success!",
        message: "Your message has been submitted.",
        color: "teal",
        autoClose: 3000,
      });

      // Reset form
      form.reset();

      // Show celebration modal with confetti
      open();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Failed to send. Please try again.",
        color: "red",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Demo API call simulation
  const simulateAPICall = (data: ContactFormData): Promise<void> => {
    return new Promise((resolve) => {
      console.log("Contact Form Data:", data);
      // Simulate API delay
      setTimeout(resolve, 1500);
    });
  };

  return (
    <>
      <section className={styles.appointmentSection + " !bg-transparent"}>
        <Container size="xl" py={80}>
          <Card
            className={styles.appointmentCard}
            shadow="lg"
            radius="lg"
            p={0}
          >
            <Grid gutter={0} align="stretch">
              {/* Illustration Section */}
              <Grid.Col
                span={{ base: 12, md: 5 }}
                className={styles.illustrationSection + " " + styles.noBottom}
              >
                <div
                  className={
                    styles.illustrationContainer + " " + styles.noBottom
                  }
                >
                  <Image
                    src={illustration}
                    alt="Send Message"
                    className={
                      styles.illustration + " object-contain md:object-cover"
                    }
                    // fit="contain"
                  />
                </div>
              </Grid.Col>

              {/* Form Section */}
              <Grid.Col
                span={{ base: 12, md: 7 }}
                className={styles.formSection}
              >
                <Stack
                  gap="xl"
                  p={60}
                  className={styles.noTop + " " + styles.stack}
                >
                  <div className={styles.header}>
                    <Title order={1} className={styles.title + " !text-center"}>
                      Contact Us
                    </Title>
                    <Text
                      className={
                        styles.subtitle + " !text-center !max-w-[unset]"
                      }
                    >
                      If you have any query, please contact us
                    </Text>
                  </div>

                  <form
                    onSubmit={form.onSubmit(handleSubmit)}
                    className={styles.form}
                  >
                    <Stack gap="lg">
                      <TextInput
                        label="Name"
                        placeholder="Enter your full name"
                        required
                        size="md"
                        className={styles.input}
                        {...form.getInputProps("name")}
                      />

                      <TextInput
                        label="Email Address"
                        placeholder="Enter your email address"
                        required
                        size="md"
                        type="email"
                        className={styles.input}
                        {...form.getInputProps("email")}
                      />

                      <TextInput
                        label="Subject"
                        placeholder="Enter your subject"
                        required
                        size="md"
                        type="text"
                        className={styles.input}
                        {...form.getInputProps("subject")}
                      />

                      {/* <Select
                        label="Service Type"
                        placeholder="Select a service"
                        required
                        size="md"
                        data={serviceOptions}
                        className={styles.input}
                        {...form.getInputProps("serviceType")}
                      /> */}

                      <Textarea
                        label="Message"
                        placeholder="Tell us more about your requirements..."
                        required
                        size="md"
                        minRows={4}
                        maxRows={6}
                        className={styles.input}
                        {...form.getInputProps("message")}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        loading={isSubmitting}
                        className={styles.submitButton}
                        fullWidth
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </Container>
      </section>

      {/* Fixed Celebration Modal */}
      <CelebrationModal opened={opened} onClose={close} />
    </>
  );
};

export default ContactForm;
