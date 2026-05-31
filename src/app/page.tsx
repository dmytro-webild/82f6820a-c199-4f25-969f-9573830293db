"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, CheckCircle, Cog, Diamond, Heart, HelpCircle, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Collections",
          id: "#products",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/ornamental-wedding-monogram-collection_23-2148288379.jpg"
      logoAlt="Samarth Gold Logo"
      brandName="Samarth Gold"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Experience the Radiance of Samarth Gold"
      description="Discover exquisite craftsmanship and unparalleled beauty in every piece. Samarth Gold is where tradition meets modern elegance, crafted for your timeless moments."
      testimonials={[
        {
          name: "Priya Sharma",
          handle: "@priyasharma",
          testimonial: "Samarth Gold's collection is simply breathtaking. The quality and designs are unmatched. My wedding necklace was a dream!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-beautiful-woman-jeans-jacket-walking-street-with-little-purse-elegant-style-spring-fashion-trends_285396-6701.jpg",
          imageAlt: "Priya Sharma",
        },
        {
          name: "Rajesh Kumar",
          handle: "@rajeshk",
          testimonial: "I purchased a ring for my wife, and she absolutely adores it. The service was exceptional, and the craftsmanship is superb.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/charming-young-couple-looks-gorgeous-posing-luxury-room-before-shiny-christmas-tree_8353-5237.jpg",
          imageAlt: "Rajesh Kumar",
        },
        {
          name: "Ananya Singh",
          handle: "@ananyas",
          testimonial: "The bangles from Samarth Gold are stunning. They truly capture the essence of Indian tradition with a modern touch.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502988.jpg",
          imageAlt: "Ananya Singh",
        },
        {
          name: "Vikram Mehta",
          handle: "@vikramm",
          testimonial: "Outstanding quality and unique designs. Samarth Gold is my go-to for all special occasions. Highly recommended!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cross-fingers-good-luck-hopefully-praying-dream-come-true-making-wish-anticipating-important-results-wanna-win_176420-44590.jpg",
          imageAlt: "Vikram Mehta",
        },
        {
          name: "Sonia Devi",
          handle: "@soniad",
          testimonial: "Their customer service made my shopping experience delightful. The pendant I bought is a true masterpiece.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-young-woman-holding-blue-envelope-silver-wrapped-gift-box-out-focus-background_181624-25174.jpg",
          imageAlt: "Sonia Devi",
        },
        {
          name: "Gaurav Gupta",
          handle: "@gauravg",
          testimonial: "Samarth Gold offers exquisite designs and certified purity. I couldn't be happier with my purchases.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/gray-haired-mature-senior-woman-stylish-knitted-jumper-expressing-excitement-joy-looking-with-broad-beaming-smile-holding-hands-as-if-squeezing-something-human-reactions-feelings_343059-2690.jpg",
          imageAlt: "Gaurav Gupta",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="Luxury Jewellery"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Explore Collections",
          href: "#products",
        },
        {
          text: "Book an Appointment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-indian-woman-wearing-sari_23-2149400863.jpg"
      imageAlt="Exquisite gold necklace with intricate design"
      showBlur={true}
      textPosition="bottom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-vector/ornamental-wedding-monogram-collection_23-2148288379.jpg",
          alt: "Priya Sharma",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-indian-woman-wearing-sari_23-2149400863.jpg",
          alt: "Rajesh Kumar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/numerology-concept-with-pebbles_23-2150062905.jpg",
          alt: "Ananya Singh",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-beautiful-woman-jeans-jacket-walking-street-with-little-purse-elegant-style-spring-fashion-trends_285396-6701.jpg",
          alt: "Vikram Mehta",
        },
        {
          src: "http://img.b2bpic.net/free-photo/charming-young-couple-looks-gorgeous-posing-luxury-room-before-shiny-christmas-tree_8353-5237.jpg",
          alt: "Sonia Devi",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Legacy in Gold"
      description="For generations, Samarth Gold has been synonymous with trust, artistry, and the purest gold. Our heritage is woven into every design, reflecting a commitment to quality and timeless beauty that spans decades."
      tag="Heritage & Craft"
      tagIcon={Diamond}
      bulletPoints={[
        {
          title: "Artisanal Craftsmanship",
          description: "Each piece is meticulously handcrafted by master artisans, preserving traditional techniques with contemporary flair.",
          icon: Cog,
        },
        {
          title: "Uncompromised Purity",
          description: "We guarantee 100% certified gold, ensuring transparency and trust in every purchase.",
          icon: CheckCircle,
        },
        {
          title: "Ethical Sourcing",
          description: "Committed to responsible practices, our materials are ethically sourced, reflecting our respect for the planet and people.",
          icon: Leaf,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/numerology-concept-with-pebbles_23-2150062905.jpg"
      imageAlt="Artisan handcrafting a gold piece"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Unique Designs",
          description: "From traditional masterpieces to contemporary statements, our designs are crafted to reflect individuality and modern trends.",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-shine-diamonds-digital-art_23-2151695088.jpg",
          imageAlt: "Jewellery design sketch",
        },
        {
          title: "Certified Purity",
          description: "Every gold piece comes with a guarantee of purity, verified by independent certifications for your complete assurance.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-courtroom-scene-lawyer-s-day-celebration_23-2151023400.jpg",
          imageAlt: "Gold purity certificate",
        },
        {
          title: "Custom Creations",
          description: "Bring your vision to life with our bespoke design service, crafting personalized jewellery that tells your unique story.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-drawing-heena-female-s-hand_23-2148083028.jpg",
          imageAlt: "Custom jewellery design process",
        },
        {
          title: "Expert Guidance",
          description: "Our knowledgeable team provides personalized consultations, helping you choose the perfect piece for any occasion.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-rich-woman-holding-tablet_23-2149722599.jpg",
          imageAlt: "Jewellery expert assisting customer",
        },
      ]}
      title="Crafted with Passion & Precision"
      description="At Samarth Gold, we pride ourselves on distinct features that set our jewellery apart, blending intricate artistry with enduring quality."
      tag="Our Hallmark"
      tagIcon={Sparkles}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Elegant Solitaire Ring",
          price: "₹ 75,000",
          imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-golden-ring-rock-concrete-tray_23-2150329670.jpg",
          imageAlt: "Elegant Solitaire Ring",
        },
        {
          id: "2",
          name: "Traditional Bridal Necklace",
          price: "₹ 2,50,000",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-thai-dress-that-made-hand-symbol_1150-16103.jpg",
          imageAlt: "Traditional Bridal Necklace",
        },
        {
          id: "3",
          name: "Sparkling Diamond Earrings",
          price: "₹ 1,20,000",
          imageSrc: "http://img.b2bpic.net/free-photo/aesthetic-golden-earrings-arrangement_23-2149846599.jpg",
          imageAlt: "Sparkling Diamond Earrings",
        },
        {
          id: "4",
          name: "Classic Gold Bracelet",
          price: "₹ 90,000",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-young-female-wearing-beautiful-silver-bracelet_181624-26319.jpg",
          imageAlt: "Classic Gold Bracelet",
        },
        {
          id: "5",
          name: "Divine Ganesha Pendant",
          price: "₹ 45,000",
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-indian-tray-with-traditional-sacred-objects-wedding-ceremony_8353-9781.jpg",
          imageAlt: "Divine Ganesha Pendant",
        },
        {
          id: "6",
          name: "Delicate Gold Chain",
          price: "₹ 30,000",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-golden-textured-material_23-2148943376.jpg",
          imageAlt: "Delicate Gold Chain",
        },
        {
          id: "7",
          name: "Intricate Gold Bangles",
          price: "₹ 1,80,000",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-talking-phone_23-2149105406.jpg",
          imageAlt: "Intricate Gold Bangles",
        },
      ]}
      title="Timeless Collections"
      description="Explore our diverse range of exquisite gold jewellery, each collection meticulously designed to capture hearts and celebrate moments."
      tag="Our Masterpieces"
      tagIcon={Diamond}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          handle: "Happy Bride",
          testimonial: "The wedding jewellery from Samarth Gold was everything I dreamt of and more. Truly a masterpiece!",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-middle-aged-woman-posing_344912-2834.jpg",
          imageAlt: "Priya Sharma",
        },
        {
          id: "2",
          name: "Rajesh Kumar",
          handle: "Grateful Husband",
          testimonial: "Purchased an anniversary gift from Samarth Gold. My wife loved it! Excellent quality and fantastic service.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-posing-with-bottle-champagne_329181-5664.jpg",
          imageAlt: "Rajesh Kumar",
        },
        {
          id: "3",
          name: "Ananya Singh",
          handle: "Jewellery Enthusiast",
          testimonial: "Samarth Gold's collection perfectly blends tradition with modern style. Their bangles are exquisite and unique.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-pressing-buzzer-button_23-2149586564.jpg",
          imageAlt: "Ananya Singh",
        },
        {
          id: "4",
          name: "Vikram Mehta",
          handle: "Loyal Customer",
          testimonial: "Consistently impressed by the quality and craftsmanship. Samarth Gold is my trusted jeweller for every occasion.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy_158538-25179.jpg",
          imageAlt: "Vikram Mehta",
        },
        {
          id: "5",
          name: "Sonia Devi",
          handle: "First-time Buyer",
          testimonial: "The staff were incredibly helpful, guiding me to the perfect pendant. A truly memorable shopping experience!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-paying-with-credit-card-shopping_329181-18778.jpg",
          imageAlt: "Sonia Devi",
        },
        {
          id: "6",
          name: "Gaurav Gupta",
          handle: "Satisfied Client",
          testimonial: "From purity guarantees to stunning designs, Samarth Gold excels. I always recommend them for fine gold jewellery.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-lady-patterned-blouse-showing-ok-gesture-looking-cheery-front-view_176474-31809.jpg",
          imageAlt: "Gaurav Gupta",
        },
      ]}
      title="Adorned with Trust"
      description="Hear from our cherished customers who have experienced the Samarth Gold difference."
      tag="Client Stories"
      tagIcon={Heart}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Bureau of Indian Standards",
        "World Gold Council",
        "Gem & Jewellery Export Promotion Council",
        "International Gemological Institute",
        "Jewellery Manufacturers Association",
        "Responsible Jewellery Council",
        "National Institute of Jewellery",
      ]}
      title="Trusted Certifications & Affiliations"
      description="Our commitment to quality and ethical practices is recognized by leading industry standards and partners."
      tag="Quality Assured"
      tagIcon={Award}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What is 22K gold?",
          content: "22K gold means 91.6% purity of gold. It is commonly used for making jewellery due to its durability compared to 24K pure gold, while still retaining high gold content.",
        },
        {
          id: "2",
          title: "Do you offer customization services?",
          content: "Yes, we offer bespoke jewellery design services. Our expert artisans can bring your unique vision to life. Please visit our showroom to discuss your custom design requirements.",
        },
        {
          id: "3",
          title: "What is your return policy?",
          content: "We offer a flexible return and exchange policy within a specified period, typically 15-30 days, provided the item is in its original condition with all certifications. Please check our detailed policy in-store.",
        },
        {
          id: "4",
          title: "Are your diamonds certified?",
          content: "Absolutely. All diamonds used in Samarth Gold jewellery are ethically sourced and come with independent certifications from reputable gemological laboratories like GIA, IGI, or HRD.",
        },
        {
          id: "5",
          title: "Do you buy old gold?",
          content: "Yes, we do. We offer competitive rates for old gold based on its purity and current market value. Please visit our store for an accurate valuation.",
        },
        {
          id: "6",
          title: "How can I care for my gold jewellery?",
          content: "To maintain the luster of your gold jewellery, clean it regularly with a mild soap and soft brush, store it in a separate pouch or box, and avoid exposure to harsh chemicals.",
        },
      ]}
      title="Your Questions, Our Expertise"
      description="Find answers to frequently asked questions about our products, services, and policies."
      tag="Common Queries"
      tagIcon={HelpCircle}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Connect With Us"
      title="Visit Our Showroom Today"
      description="Experience the beauty of Samarth Gold in person. Our expert team is ready to assist you in finding the perfect piece or to discuss your custom design needs."
      inputPlaceholder="Your Email Address"
      buttonText="Send Inquiry"
      termsText="By sending an inquiry, you agree to our Privacy Policy and Terms of Service. We will not share your information."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Collections",
          items: [
            {
              label: "Rings",
              href: "#products",
            },
            {
              label: "Necklaces",
              href: "#products",
            },
            {
              label: "Earrings",
              href: "#products",
            },
            {
              label: "Bracelets",
              href: "#products",
            },
            {
              label: "Pendants",
              href: "#products",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Craftsmanship",
              href: "#features",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Certifications",
              href: "#social-proof",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Store Location",
              href: "#contact",
            },
          ],
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/ornamental-wedding-monogram-collection_23-2148288379.jpg"
      logoAlt="Samarth Gold Logo"
      logoText="Samarth Gold"
      copyrightText="© 2024 Samarth Gold. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
