import { RecoilRoot } from "recoil";
import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";
import SocialMedia from "../components/SocialMedia";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Pay Via UPI </title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://payviaupi.com" />
        <meta
          name="description"
          content=" Add UPI Donation Option to your website under 60 seconds. Create upi qrcode. Get free upi qrcode for your website. "
        />
        <meta
          name="image"
          property="og:image"
          content="https://www.payviaupi.com/header.png"
        />
        <meta name="author" content="Pratik Sharma" />
        <meta name="theme-color" content="#fff" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="@biomathcode" key="twhandle" />
        <meta name="twitter:title" content="Pay Via UPI" />
        <meta name="twitter:image" content="https://payviaupi.com/header.png" />
        <meta
          name="twitter:image:src"
          content="https://payviaupi.com/header.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payviaupi.com" key="ogurl" />

        <meta property="og:site_name" content="PayViaUPI" key="ogsitename" />
        <meta
          name="url"
          property="og:url"
          content="https://payviaupi.com"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Add UPI Donation Option to your website under 60 seconds."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Add UPI Donation Option to your website under 60 seconds. Free| Open-sourced | Responsive "
          }
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <nav>
        <div className="flex ">
          <Link href="/" passHref>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/logo.svg"
                alt="Logo of pay via upi"
                width="40px"
                height="40px"
              />
              <div className="logo"> PAY VIA UPI.com</div>
            </div>
          </Link>
        </div>

        <div className="flex ">
          <a href="#create" style={{ marginRight: "20px" }}>
            Widget
          </a>
          <a href="#donatebutton"> Button</a>
        </div>
      </nav>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>

      <footer
        className="footer responsive"
        style={{
          backgroundColor: "#E1CFFF",
          textAlign: "center",
          border: "none",
        }}
      >
        <div className="flex column  responsive">
          <a
            href="https://twitter.com/biomathcode"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "20px" }}
          >
            Created by
            {"\u2002Pratik Sharma "}
          </a>
          <a
            href="https://github.com/pratiksharm/pay-via-upi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "20px" }}
          >
            Visit Github Repo
          </a>
        </div>
        <div className="flex center gap-10">
          <div className="flex column gap-10">
            <div className="flex center">
              <Image
                src="/logo.svg"
                alt="Logo of pay via upi"
                width="40px"
                height="40px"
                style={{ margin: "20px" }}
              />
              <div>© Copyright 2022</div>
            </div>

            <div>admin@payviaupi.com</div>
            <SocialMedia />
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
