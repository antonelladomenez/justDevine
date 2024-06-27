import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import "./styles/FAQs.css"; // Puedes crear un archivo CSS para estilos adicionales
import Menu from "./components/Menu";
import FrameWoodWhite from "./components/FrameWoodWhite";
import Footer from "./components/Footer";

function FaqSection() {
  const faqs = [
    {
      question: "Is gelato different from ice cream?",
      answer: (
        <>
          Gelato and ice cream typically have the same ingredients: Milk, cream,
          sugar.
          <br />
          The difference is in the ratios. Ice cream uses more cream vs. milk,
          while gelato uses more milk vs. cream so it’s lower in fat.
          <br />
          Gelato is also served at a warmer temperature and is churned more
          slowly than ice cream.
          <br />
          Add all of this up and you get a creamy, smooth, and intensely
          flavoured gelato.
        </>
      ),
    },
    {
      question: "I am allergic to …….? I am a coeliac?",
      answer: (
        <>
          We take food allergen risks very seriously!
          <br /> In Australia, all food businesses are required to have an
          effective allergen management plan as part of their food safety
          program and train their staff in food allergen risks.
          <br /> We provide clear and accurate information about our products,
          and manage the unintentional presence of food allergen as best as
          possible.
          <br /> While we do offer gluten free, dairy free, lactose free and
          vegan options, we cannot fully eliminate the risk of possible
          cross-contamination.
          <br /> Please be aware, we are a small batch production with a single
          production facility and allergens (e.g. dairy, peanuts, tree nuts,
          soy, gluten) are present in the environment. <br />
          Even with all due care, cross-contamination with trace elements can
          happen during the production, storing or displaying process. <br />
          Extra washing of spoons, scooping from different areas of trays or
          getting a new batch of gelato will NOT mitigate the risk.
          <br /> Please understand we have a strict food safety policy in place.
          We won’t gamble with your health.
        </>
      ),
    },
    {
      question: "Are the sorbets vegan?",
      answer: (
        <>
          Yes, they are. 100%
          <br />
          We are aware of a rumour, cane sugar not being vegan due to the use of
          bone ash in the production process. That’s an American thing.
          <br />
          Our local Bundaberg cane sugar does not contain any nasties. It is
          vegan!
          <br />
          Please note, while our sorbets are vegan, due to our small facility
          and the way it is stored, there is a small possibility of
          cross-contamination with non-vegan items.
        </>
      ),
    },
    {
      question: "Do you offer lactose free gelato?",
      answer: (
        <>
          All our sorbets are lactose free.
          <br />
          By the way- Did you know there are no naturally lactose free dairy
          products? All “lactose free”
          <br />
          products have lactase added.
        </>
      ),
    },
    {
      question: "Do you use eggs?",
      answer:
        "No, we don’t use eggs due to regulatory requirements. We do however use mix-ins which may contain egg (biscuits, crumbs etc). Please ask staff.",
    },
    {
      question: "Do you use gelatine?",
      answer:
        "No way! We exclusively use fresh pure cream, not thickened cream, which often contains beef gelatine.",
    },
    {
      question: "Why do you occasionally run out of flavours?",
      answer: (
        <>
          All our gelato and sorbet are made fresh daily in small batches, which
          means that at busy times
          <br />
          popular flavours will sometimes sell out.
          <br />
          But don’t worry—we will whip up a new batch as soon as possible!
          <br />
          And as we use a time-consuming traditional process, this might take a
          day. We don’t use short cuts -<br />
          we value quality!
        </>
      ),
    },
    {
      question:
        "Why are there some half full trays in your display in the morning?",
      answer: (
        <>
          Simple – transparency and food safety.
          <br />
          Because we don’t melt our products at the end of the day, re-churn
          them the next and present them
          <br />
          as fresh.
          <br />
          Our gelato is made fresh daily. We start very early each morning and
          until a new fresh batch goes
          <br />
          into the display, we will scoop the product from the day before.
        </>
      ),
    },
    {
      question: "Do you support local farmers?",
      answer: (
        <>
          Yes, we do!
          <br />
          We take pride in using local ingredients that not only taste amazing
          but also support our local
          <br />
          economy and foster community relationships.
          <br />
          Much of the fresh produce we use is from the Atherton tablelands.
          Sourced from farmers we
          <br />
          personally know and trust.
          <br />
          It is a bit more expensive, but local means fresher produce, better
          quality gelato, and a smaller
          <br />
          carbon footprint.
        </>
      ),
    },
    {
      question: "What has more sugar, gelato or sorbet?",
      answer:
        "Both contain about the same amount of sugar (18-20%). Sorbets are a bit higher in sugar as fruit naturally contains fructose.",
    },
    {
      question: "Are you open on public holidays?",
      answer: (
        <>
          Yes! We are open every day of the year………unless there is a cyclone!
          <br />
          Sometimes we open a bit later due to equipment or human failure.
          Please check our Facebook page
          <br />
          for updates.
        </>
      ),
    },
    {
      question: "I tried calling, but no one is answering?",
      answer:
        "It is too noisy in our kitchen and at the front we are very busy serving, so often we don’t get to the phone in time. Leave a message and we'll get back to you asap. Better email us: devinegelato@gmail.com.",
    },
    {
      question: "Why don’t you deliver?",
      answer: (
        <>
          We would need an extra staff member to service the calls. That would
          increase the cost of the gelato
          <br />
          and we are trying hard to keep our prices as low as possible for the
          community.
          <br />
          We had no price increase since 2019!
        </>
      ),
    },
    {
      question: "Do you have take away containers?",
      answer: "Yes, we currently offer 500ml & 1000ml take away containers.",
    },
    {
      question: "Do you offer wholesale?",
      answer: "Sorry, no! We are already at full capacity with our production.",
    },
    {
      question: "Do you do cakes?",
      answer:
        "Unfortunately, not at the moment. It is on our to do list, but first, we have to find ways to extend our storage space and production capacity.",
    },
  ];

  return (
    <div className="faqs">
      <Container fluid>
        <Menu />
        <FrameWoodWhite></FrameWoodWhite>
        <div className="faq-container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>
                  {faq.question}
                  <Button variant="link" className="p-0">
                    <i className="bi bi-plus"></i>
                  </Button>
                </Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default FaqSection;
