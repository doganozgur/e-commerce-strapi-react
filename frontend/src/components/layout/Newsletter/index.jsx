import { NarrowContainer } from "../../../styles/Utils";
import {
  Button,
  Left,
  Middle,
  NewsletterInner,
  Right,
  SocialItem,
  SocialList,
  StyledNewsletter,
  Textbox,
  Title,
} from "./Newsletter.styled";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Newsletter() {
  return (
    <StyledNewsletter>
      <NarrowContainer>
        <NewsletterInner>
          <Left>
            <Title>Be in touch with us</Title>
          </Left>
          <Middle>
            <Textbox type="text" placeholder="Enter your email" />
            <Button></Button>
            {/* <Button>Join Us</Button> */}
          </Middle>
          <Right>
            <SocialList>
              {/* Social item */}
              <SocialItem>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to whatsapp"
                >
                  <WhatsAppIcon />
                </a>
              </SocialItem>
              {/* Social item */}
              <SocialItem>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to facebook"
                >
                  <FacebookIcon />
                </a>
              </SocialItem>
              {/* Social item */}
              <SocialItem>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to instagram"
                >
                  <InstagramIcon />
                </a>
              </SocialItem>
              {/* Social item */}
              <SocialItem>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to twitter"
                >
                  <TwitterIcon />
                </a>
              </SocialItem>
            </SocialList>
          </Right>
        </NewsletterInner>
      </NarrowContainer>
    </StyledNewsletter>
  );
}
