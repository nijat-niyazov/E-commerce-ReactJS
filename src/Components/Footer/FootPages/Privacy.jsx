import styles from './FootPages.module.css';
import React, { useEffect } from 'react';

function Privacy() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 198, left: 0, behavior: 'smooth' });
  });

  return (
    <div className={styles.foot_page}>
      <h2>Information tracked / collected by our site</h2>
      <p>&nbsp;</p>
      <p>
        1. In order to optimize the site, provide prompt feedback from visitors,
        provide useful information and collect site statistics, our web services
        automatically collect limited data on the connection of your computer
        (device) to the Internet, including the IP address during the visit and
        cookies. These files inform us about the pages you visit, reporting only
        the computer (device) ID, and not the personal data of the visitor.
      </p>
      <p>
        2. In the absence of intentional self-identification (for example,
        through registration), the identification of your identity is impossible
        even when using cookies from your computer. The personal data contained
        in cookies is the data provided by you. Our cookies cannot read personal
        data from your device.
      </p>
      <br />
      <p>
        3. To use certain functions of the site (for example, ordering goods and
        online payment), users must register and, accordingly, provide certain
        data during registration (for example, we can request a name, email
        address, phone number, city and postal code).
      </p>
      <br />
      <p>
        4. The information you provide can help provide more personalized
        information, tailor the site to your interests and make it more
        informative. If you want to maintain anonymity, you can get on the site
        all the information available without registration.
      </p>
      <br />
      <p>
        5. When you place an order and provide confidential information (data on
        a credit or debit card), its security and confidentiality is guaranteed
        by Pashabank. No information is stored on the site.
      </p>
      <br />
      <p>&nbsp;</p>
      <h2>Security</h2>
      <p>
        <br />
        This site uses numerous security measures to protect against loss of
        information, its incorrect and unlawful use or alteration. These
        measures include the use of a password, communication with security
        servers, data encryption, data backup, and conventional blocking and
        warning systems.
        <br />
        &nbsp;
      </p>
      <h2>Changes and Updates</h2> <br />
      <p>
        We reserve the right to change our privacy policy. Any changes to the
        Privacy Policy will be posted on the site.
      </p>
    </div>
  );
}

export default Privacy;
