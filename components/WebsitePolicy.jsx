import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import { ClickAwayListener } from "@material-ui/core";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const WebsitePolicy = ({ setPressOpen, activePress, setPolicyOpen }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="press-modal"
    >
      <ClickAwayListener onClickAway={() => setPolicyOpen(false)}>
        <div className="card">
          <div onClick={() => setPolicyOpen(false)} className="close-icon">
            <CloseIcon />
          </div>
          <div className="text">
            <h1>Website Policy</h1>
            <br />
            Thank you for choosing to be part of our community at The Julia Tree
            ("Company", "we", "us", "our"). We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns aboutF this privacy notice, or our practices
            with regards to your personal information, please contact us at
            thejuliatree@gmail.com. When you visit our website
            https://www.thejuliatree.org (the "Website"), and more generally,
            use any of our services (the "Services", which include the Website),
            we appreciate that you are trusting us with your personal
            information.
            <br />
            <br /> We take your privacy very seriously. In this privacy notice,
            we seek to explain to you in the clearest way possible what
            information we collect, how we use it and what rights you have in
            relation to it. We hope you take some time to read through it
            carefully, as it is important. If there are any terms in this
            privacy notice that you do not agree with, please discontinue use of
            our Services immediately. <br />
            <br />
            This privacy notice applies to all information collected through our
            Services (which, as described above, includes our Website), as well
            as, any related services, sales, marketing or events. Please read
            this privacy notice carefully as it will help you understand what we
            do with the information that we collect. <br />
            <br />
            TABLE OF CONTENTS
            <br /> 1. WHAT INFORMATION DO WE COLLECT?
            <br /> 2. HOW DO WE USE YOUR INFORMATION?
            <br /> 3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            <br /> 4. HOW LONG DO WE KEEP YOUR INFORMATION?
            <br /> 5. DO WE COLLECT INFORMATION FROM MINORS? <br />
            6. WHAT ARE YOUR PRIVACY RIGHTS? <br />
            7. CONTROLS FOR DO-NOT-TRACK FEATURES <br />
            8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? <br />
            9. DO WE MAKE UPDATES TO THIS NOTICE? <br />
            10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            <br /> 11. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT
            FROM YOU?
            <br />
            <br /> 1. WHAT INFORMATION DO WE COLLECT? <br />
            Personal information you disclose to us In Short: We collect
            personal information that you provide to us. We collect personal
            information that you voluntarily provide to us when you express an
            interest in obtaining information about us or our products and
            Services, when you participate in activities on the Website or
            otherwise when you contact us. The personal information that we
            collect depends on the context of your interactions with us and the
            Website, the choices you make and the products and features you use.
            The personal information we collect may include the following:
            Personal Information Provided by You. We collect names; email
            addresses; and other similar information. Payment Data. We may
            collect data necessary to process your payment if you make
            purchases, such as your payment instrument number (such as a credit
            card number), and the security code associated with your payment
            instrument. All payment data is stored by Stripe. You may find their
            privacy notice link(s) here: https://stripe.com/es-us/privacy. All
            personal information that you provide to us must be true, complete
            and accurate, and you must notify us of any changes to such personal
            information. Information automatically collected In Short: Some
            information — such as your Internet Protocol (IP) address and/or
            browser and device characteristics — is collected automatically when
            you visit our Website. We automatically collect certain information
            when you visit, use or navigate the Website. This information does
            not reveal your specific identity (like your name or contact
            information) but may include device and usage information, such as
            your IP address, browser and device characteristics, operating
            system, language preferences, referring URLs, device name, country,
            location, information about how and when you use our Website and
            other technical information. This information is primarily needed to
            maintain the security and operation of our Website, and for our
            internal analytics and reporting purposes. The information we
            collect includes: Log and Usage Data. Log and usage data is
            service-related, diagnostic, usage and performance information our
            servers automatically collect when you access or use our Website and
            which we record in log files. Depending on how you interact with us,
            this log data may include your IP address, device information,
            browser type and settings and information about your activity in the
            Website (such as the date/time stamps associated with your usage,
            pages and files viewed, searches and other actions you take such as
            which features you use), device event information (such as system
            activity, error reports (sometimes called 'crash dumps') and
            hardware settings). Device Data. We collect device data such as
            information about your computer, phone, tablet or other device you
            use to access the Website. Depending on the device used, this device
            data may include information such as your IP address (or proxy
            server), device and application identification numbers, location,
            browser type, hardware model Internet service provider and/or mobile
            carrier, operating system and system configuration information.
            Information collected from other sources In Short: We may collect
            limited data from public databases, marketing partners, and other
            outside sources. In order to enhance our ability to provide relevant
            marketing, offers and services to you and update our records, we may
            obtain information about you from other sources, such as public
            databases, joint marketing partners, affiliate programs, data
            providers, as well as from other third parties. This information
            includes mailing addresses, job titles, email addresses, phone
            numbers, intent data (or user behavior data), Internet Protocol (IP)
            addresses, social media profiles, social media URLs and custom
            profiles, for purposes of targeted advertising and event promotion.
            <br />
            <br />
            2. HOW DO WE USE YOUR INFORMATION?
            <br /> In Short: We process your information for purposes based on
            legitimate business interests, the fulfillment of our contract with
            you, compliance with our legal obligations, and/or your consent. We
            use personal information collected via our Website for a variety of
            business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below. We use the information we collect
            or receive: Fulfill and manage your orders. We may use your
            information to fulfill and manage your orders, payments, returns,
            and exchanges made through the Website. Administer prize draws and
            competitions. We may use your information to administer prize draws
            and competitions when you elect to participate in our competitions.
            To deliver and facilitate delivery of services to the user. We may
            use your information to provide you with the requested service. To
            respond to user inquiries/offer support to users. We may use your
            information to respond to your inquiries and solve any potential
            issues you might have with the use of our Services. To send you
            marketing and promotional communications. We and/or our third-party
            marketing partners may use the personal information you send to us
            for our marketing purposes, if this is in accordance with your
            marketing preferences. For example, when expressing an interest in
            obtaining information about us or our Website, subscribing to
            marketing or otherwise contacting us, we will collect personal
            information from you. You can opt-out of our marketing emails at any
            time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below). Deliver
            targeted advertising to you. We may use your information to develop
            and display personalized content and advertising (and work with
            third parties who do so) tailored to your interests and/or location
            and to measure its effectiveness. <br />
            <br />
            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            <br />
            In Short: We only share information with your consent, to comply
            with laws, to provide you with services, to protect your rights, or
            to fulfill business obligations. We may process or share your data
            that we hold based on the following legal basis: Consent: We may
            process your data if you have given us specific consent to use your
            personal information for a specific purpose. Legitimate Interests:
            We may process your data when it is reasonably necessary to achieve
            our legitimate business interests. Performance of a Contract: Where
            we have entered into a contract with you, we may process your
            personal information to fulfill the terms of our contract. Legal
            Obligations: We may disclose your information where we are legally
            required to do so in order to comply with applicable law,
            governmental requests, a judicial proceeding, court order, or legal
            process, such as in response to a court order or a subpoena
            (including in response to public authorities to meet national
            security or law enforcement requirements). Vital Interests: We may
            disclose your information where we believe it is necessary to
            investigate, prevent, or take action regarding potential violations
            of our policies, suspected fraud, situations involving potential
            threats to the safety of any person and illegal activities, or as
            evidence in litigation in which we are involved. More specifically,
            we may need to process your data or share your personal information
            in the following situations: Business Transfers. We may share or
            transfer your information in connection with, or during negotiations
            of, any merger, sale of company assets, financing, or acquisition of
            all or a portion of our business to another company. <br />
            <br />
            4. HOW LONG DO WE KEEP YOUR INFORMATION?
            <br /> In Short: We keep your information for as long as necessary
            to fulfill the purposes outlined in this privacy notice unless
            otherwise required by law. We will only keep your personal
            information for as long as it is necessary for the purposes set out
            in this privacy notice, unless a longer retention period is required
            or permitted by law (such as tax, accounting or other legal
            requirements). No purpose in this notice will require us keeping
            your personal information for longer than 1 year. When we have no
            ongoing legitimate business need to process your personal
            information, we will either delete or anonymize such information,
            or, if this is not possible (for example, because your personal
            information has been stored in backup archives), then we will
            securely store your personal information and isolate it from any
            further processing until deletion is possible. <br />
            <br />
            5. DO WE COLLECT INFORMATION FROM MINORS?
            <br /> In Short: We do not knowingly collect data from or market to
            children under 18 years of age. We do not knowingly solicit data
            from or market to children under 18 years of age. By using the
            Website, you represent that you are at least 18 or that you are the
            parent or guardian of such a minor and consent to such minor
            dependent’s use of the Website. If we learn that personal
            information from users less than 18 years of age has been collected,
            we will deactivate the account and take reasonable measures to
            promptly delete such data from our records. If you become aware of
            any data we may have collected from children under age 18, please
            contact us at thejuliatree@gmail.com. <br />
            <br />
            6. WHAT ARE YOUR PRIVACY RIGHTS? <br />
            In Short: In some regions, such as the European Economic Area, you
            have rights that allow you greater access to and control over your
            personal information. You may review, change, or terminate your
            account at any time. In some regions (like the European Economic
            Area), you have certain rights under applicable data protection
            laws. These may include the right (i) to request access and obtain a
            copy of your personal information, (ii) to request rectification or
            erasure; (iii) to restrict the processing of your personal
            information; and (iv) if applicable, to data portability. In certain
            circumstances, you may also have the right to object to the
            processing of your personal information. To make such a request,
            please use the contact details provided below. We will consider and
            act upon any request in accordance with applicable data protection
            laws. If we are relying on your consent to process your personal
            information, you have the right to withdraw your consent at any
            time. Please note however that this will not affect the lawfulness
            of the processing before its withdrawal, nor will it affect the
            processing of your personal information conducted in reliance on
            lawful processing grounds other than consent. If you are a resident
            in the European Economic Area and you believe we are unlawfully
            processing your personal information, you also have the right to
            complain to your local data protection supervisory authority. You
            can find their contact details here:
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            If you are a resident in Switzerland, the contact details for the
            data protection authorities are available here:
            https://www.edoeb.admin.ch/edoeb/en/home.html.
            <br />
            <br /> 7. CONTROLS FOR DO-NOT-TRACK FEATURES
            <br /> Most web browsers and some mobile operating systems and
            mobile applications include a Do-Not-Track ("DNT") feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this privacy notice. <br />
            <br />
            8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? <br />
            In Short: Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below. If you are under 18 years of age, reside
            in California, and have a registered account with the Website, you
            have the right to request removal of unwanted data that you publicly
            post on the Website. To request removal of such data, please contact
            us using the contact information provided below, and include the
            email address associated with your account and a statement that you
            reside in California. We will make sure the data is not publicly
            displayed on the Website, but please be aware that the data may not
            be completely or comprehensively removed from all our systems (e.g.
            backups, etc.). <br />
            <br />
            9. DO WE MAKE UPDATES TO THIS NOTICE?
            <br /> In Short: Yes, we will update this notice as necessary to
            stay compliant with relevant laws. We may update this privacy notice
            from time to time. The updated version will be indicated by an
            updated "Revised" date and the updated version will be effective as
            soon as it is accessible. If we make material changes to this
            privacy notice, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this privacy notice frequently to be
            informed of how we are protecting your information. <br />
            <br />
            10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? <br />
            If you have questions or comments about this notice, you may email
            us at thejuliatree@gmail.com or by post to: The Julia Tree Carel
            Fabritiuslaan 30 Amstelveen, North Holland 1181 TE Netherlands
            <br />
            <br /> 11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
            FROM YOU?
            <br /> Based on the applicable laws of your country, you may have
            the right to request access to the personal information we collect
            from you, change that information, or delete it in some
            circumstances. To request to review, update, or delete your personal
            information, please visit: mailito:thejuliatree@gmail.com. We will
            respond to your request within 30 days.
          </div>
        </div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default WebsitePolicy;
