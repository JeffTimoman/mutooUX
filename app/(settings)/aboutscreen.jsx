import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styled } from "nativewind";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);

const AboutScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StyledView className="bg-white px-4">
        <View className="flex-row items-center px-4 py-2 relative">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-0 p-4 z-10"
          >
            <FontAwesome name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-xl font-bold">About</Text>
          </View>
        </View>
      </StyledView>

      <ScrollView className="flex-1 px-4">
        <StyledView className="mt-8">
          <Text className="text-lg font-bold">Privacy Policy</Text>
          <Text className="mt-4 text-gray-600">
            1. Information We Collect{"\n"}
            We collect personal information that you provide directly to us,
            such as when you register for an account, post content, or
            communicate with us. This may include your name, email address, and
            other contact details.{"\n\n"}
            2. How We Use Your Information{"\n"}
            We use the information we collect to operate, maintain, and improve
            our services. This includes personalizing your experience, providing
            customer support, and sending updates or notifications related to
            our services.{"\n\n"}
            3. How We Protect Your Information{"\n"}
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, please be aware that no method
            of transmission over the internet or electronic storage is
            completely secure.{"\n\n"}
            4. Your Choices{"\n"}
            You can access, update, or delete your personal information by
            logging into your account settings or contacting us directly. You
            also have the option to opt-out of receiving promotional
            communications from us.{"\n\n"}
            5. Changes to This Policy{"\n"}
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically to stay informed
            about how we are protecting your information.{"\n\n"}
            6. Contact Us{"\n"}
            If you have any questions or concerns about this Privacy Policy,
            please contact us at
            [support@example.com](mailto:support@example.com).
          </Text>

          <Text className="text-lg font-bold mt-8">Terms of Use</Text>
          <Text className="mt-4 text-gray-600">
            1. Acceptance of Terms{"\n"}
            By accessing or using our app, you agree to comply with and be bound
            by these Terms of Use. If you do not agree with these terms, please
            do not use our app.{"\n\n"}
            2. User Responsibilities{"\n"}
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account.{"\n\n"}
            3. Prohibited Conduct{"\n"}
            You agree not to engage in any activities that:{"\n"}- Violate any
            laws or regulations.{"\n"}- Infringe on the rights of others.{"\n"}-
            Disrupt or interfere with the functioning of the app.{"\n"}- Upload
            or distribute harmful or malicious software.{"\n\n"}
            4. Intellectual Property{"\n"}
            All content, trademarks, and other intellectual property rights
            related to the app are owned by us or our licensors. You may not
            use, copy, or distribute any content from the app without our prior
            written consent.{"\n\n"}
            5. Limitation of Liability{"\n"}
            We are not liable for any indirect, incidental, or consequential
            damages arising out of or in connection with your use of the app.
            Our total liability is limited to the maximum extent permitted by
            law.{"\n\n"}
            6. Termination{"\n"}
            We reserve the right to terminate or suspend your access to the app
            at our sole discretion, without prior notice, for any reason
            including if you violate these Terms of Use.{"\n\n"}
            7. Changes to Terms{"\n"}
            We may update these Terms of Use from time to time. Any changes will
            be posted on this page with an updated revision date. Your continued
            use of the app after changes are posted constitutes your acceptance
            of the updated terms.{"\n\n"}
            8. Governing Law{"\n"}
            These Terms of Use are governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            laws principles.{"\n\n"}
            9. Contact Us{"\n"}
            For any questions about these Terms of Use, please contact us at
            [support@example.com](mailto:support@example.com).
          </Text>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
