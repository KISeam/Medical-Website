import React, { useEffect } from "react";
import QuestionBox from "../../Components/QuestionBox";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-white py-12">
        <div className="w-11/12 md:w-8/11 lg:w-6/12 2xl:w-5/12 mx-auto">
          <div className="space-y-6">
            <h2 className="text-center text-black font-bold text-2xl lg:text-3xl">
              Have Any Questions?
            </h2>
            <p className="text-center text-gray-500 text-lg 2xl:text-xl">
              Find below our frequently asked questions. If you have other
              questions please contact us.
            </p>
            <div className="space-y-4 text-black">
              <QuestionBox
                title={"What do we treat?"}
                subtitle={`Common health issue Ask anything you would normally ask your 
                  GP. You can have an instant video with one of our GPs via a
                  digital consultation from anywhere, at any time of day.
                  Specialist advice Sometimes it's helpful to see a specialist
                  when you want. And get educational advice, pre-screening,
                  monitoring and follow-ups. For maternal and infant health
                  care, chronic diseases such as diabetes, or other conditions,
                  DocTime can help you to connect with the right specialist
                  doctor and to stay healthy. More than 20 different
                  specialities are available on DocTime. Mental health and
                  wellbeing In a fast paced world, it is important to monitor
                  and protect your mental health and wellbeing. Doctors can help
                  you stay healthy whether you have symptoms at home or in your
                  workplace of stress, smoking, anxiety, bereavement or
                  depression.`}
              />
              <QuestionBox
                title={"How does it work?"}
                subtitle={`You can register on our App and access several medical
                  services easily. The basic video consultation service is
                  straightforward: search for your relevant doctor with easy
                  filters, talk to your doctor directly as included in your
                  DocTime healthcare package or pay just prior the on-demand
                  consultation starts. Then access your prescription uploaded by
                  the doctor and you can order medicine or tests as recommended.
                  Keep in touch with the doctor and use medicine reminders until
                  your feel completely healthy again. Access plenty of other
                  medical services including your personal Electronic Patient
                  Record and health tips at any time through our homepage`}
              />
              <QuestionBox
                title={"Who provides consultation on DocTime?"}
                subtitle={`Only certified MBBS doctors can provide consultation via the
                  DocTime app.`}
              />
              <QuestionBox
                title={"Are the registered doctors verified?"}
                subtitle={`Yes, all our panel of doctors are verified. We verify their
                  registration with BMDC, we also check doctors national id /
                  passport with selfie to make sure the qualified doctors are
                  getting registered.`}
              />
              <QuestionBox
                title={"When are the doctors available for consultation?"}
                subtitle={`Doctors are available according to their time availability.
                  Our platform is available 24/7. Any doctor can come online at
                  any time if they want.`}
              />
              <QuestionBox
                title={"Can we select a doctor of our own choice?"}
                subtitle={`Yes, certainly, you can select any doctor registered in the
                  DocTime platform. When you search for a doctor or give your
                  symptoms, DocTime will show you all the most relevant doctors.
                  You can read their profiles and also filter/sort by price and
                  other parameters. Just select the doctor, and start your
                  consultation immediately or book an appointment.`}
              />
              <QuestionBox
                title={"How much do I need to pay for the consultation?"}
                subtitle={`If the consultation is included in your DocTime healthcare
                  subscription package, you do not have to pay for the
                  consultation. Just connect directly and we take care of the
                  rest. If this is an on-demand request for care, price could
                  vary from doctor to doctor. Different doctors have different
                  fees depending on experience and specialty like in a regular
                  clinic or hospital, and we will show each doctor’s fees.`}
              />
              <QuestionBox
                title={"How do I make payment?"}
                subtitle={`You can make payment online using bKash, rocket, Debit card,
                  credit card.`}
              />
              <QuestionBox
                title={
                  "If I decide to cancel my consultation after making payment, how do I get a refund?"
                }
                subtitle={`If you decides no to get the consultation before the doctor dial you in, we will refund you the money by bKash. We will deduct up to 5% payment processing fee. The refund may take up to 10 working days.`}
              />
              <QuestionBox
                title={"Is my data secure?"}
                subtitle={`Yes, we use 256 bit encryption for the video consultation. We also store all your information securely in our servers.`}
              />
              <QuestionBox
                title={
                  "Do I need to prepare anything before the video consultation?"
                }
                subtitle={`Make sure you have good phone reception and try to be somewhere
quiet where you feel comfortable discussing your health. Think about
relevant details to discuss for example how long you’ve felt like this, what
makes you feel better or worse, any medication you take. Also, do not
hesitate to get any vitals measurement such as your temperature if this is
possible. `}
              />
              <QuestionBox
                title={"How do I get a prescription for my consultation?"}
                subtitle={`As soon as the consultation is finished, the doctor will write and upload the prescription on the app. Once the doctor uploads the prescription, you will be able to download it immediately. You will also be able to download the prescription from your previous consultations menu.`}
              />
              <QuestionBox
                title={
                  "If the doctor finds out that my problem is not treatable over video call, what would happen?"
                }
                subtitle={`The doctor will let you know as part of the consultation if a
physical exam is needed. The GP or specialist will in this case suggest
you’re seen externally. The doctor will guide you to the best possible care
solution. In this case, you can also get a referral letter from the doctor.`}
              />
              <QuestionBox
                title={
                  "Are there any consultants available from doctors outside Bangladesh?"
                }
                subtitle={`Yes, we plan to get some doctors from the UK and Singapore on our app for consultation.`}
              />
              <QuestionBox
                title={"Can I get consultation if I am outside Bangladesh?"}
                subtitle={`Yes, you can get a consultation from anywhere in the world using our app or web service, when authorised.`}
              />
              <QuestionBox
                title={
                  "Who ensures that the correct doctor is giving the consultation?"
                }
                subtitle={`DocTime verifies each doctor. Every patient needs to make sure on video call that the profile picture is matching with the doctor on the video call.`}
              />
              <QuestionBox
                title={"Can I order medicine on DocTime?"}
                subtitle={`Yes, you can. It is like ordering in a certified pharmacy as our
medicine orders are processed through certified pharmacies who are our
partners. It is more convenient and you have access to discounts on DocTime.`}
              />
              <QuestionBox
                title={"Can I order diagnostics tests through DocTime?"}
                subtitle={`Yes, you can. It is faster and more convenient to have a certified
lab professional coming to your home to take the relevant samples. You have
access to discounts on DocTime and your tests reports will be more easily
accessible on the App. `}
              />
              <QuestionBox
                title={
                  "What are the benefits of the healthcare and protection plans/subscription packages?"
                }
                subtitle={`Our healthcare subscription plans make sure you and your family are
protected throughout the year and gives you access to doctors and hospital
cashback at any time. You don’t need to worry about using care professionals
as your plan covers for it. We help you get a better health and wellbeing.
You can choose the plan that suits your health and budget the most. Please
contact our support for more information. `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
