import React, { useRef } from "react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";

export default function Initiatives() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const listItems = [
    { name: "Brijbhoomi Swachatha Abhiyaan", id: "swachatha" },
    { name: "Naari Shakti Ko Pranaam", id: "naari-shakti" },
    { name: "Shri Rudra Gurukul", id: "gurukul" },
    { name: "Shri Rudra Gaushala", id: "gaushala" },
    { name: "Shri Rudra Ashray Sewa Sadan", id: "sewa-sadan" },
    { name: "Covid Helpline-19", id: "covid-helpline" }
  ];

  return (
    <section id="initiatives-section" className="w-screen py-20 px-[8vw] lg:py-24 bg-transparent relative z-20 overflow-hidden text-left">
      <GrainyBackground 
        id="grainy-paper-initiatives" 
        bgClass="bg-[#FAF7F0]" 
        opacityClass="opacity-[0.055]" 
        matrixValue="0.04" 
      />

      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-24">
        
        {/* Top Header & Navigation Links */}
        <div className="cinematic-reveal space-y-8 max-w-3xl">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
              INITIATIVES
            </span>
            <h2 className="text-3xl md:text-5xl font-sora font-semibold tracking-tight text-[#1F1F1F]">
              Brijbhoomi Foundation Initiatives
            </h2>
          </div>
          
          {/* Quick Nav Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-[#D8C6A8]/45">
            {listItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.id}`}
                className="px-5 py-3.5 bg-[#FCFAF5] border border-[#D8C6A8]/70 hover:border-[#8B6F47] text-[#2E2E2E] hover:text-[#8B6F47] text-xs font-sora font-semibold uppercase tracking-wider rounded-[8px] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between group"
              >
                <span>{idx + 1}. {item.name}</span>
                <span className="text-[#B67A2A] transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Initiatives Blocks Container */}
        <div className="space-y-28 pt-8">

          {/* 1. BRIJBHOOMI SWACHATHA ABHIYAAN */}
          <div id="swachatha" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-5 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/eco_volunteers.png"
                  alt="Brijbhoomi Swachatha Abhiyaan Cleanliness Campaign"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Mathura Campaign</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 cinematic-reveal">
              <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                1. BRIJBHOOMI SWACHATHA ABHIYAAN
              </h3>
              
              <p className="text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
                Contributing to Swachh Bharat Abiyan, Ashwani Kumar Choudhary had initiated a campaign (Brijbhoomi Swachatha Abhiyaan) to educate college youth, school children and several communities in Mathura on health, hygiene and sanitation.
              </p>
              
              <div className="space-y-4 text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                <p>
                  We, at Brijbhoomi Foundation (Our Campaign Brijbhoomi Swachatha Abhiyaan), fully support our Prime Minister Narendra Modi's Swachh Bharat Mission and with the aim of contributing towards a cleaner India, we are continuously carrying out cleanliness activities in Mathura.
                </p>
                <p>
                  All our Swachh Bharat campaigns have proved to be highly successful.
                </p>
                <p>
                  Brijbhoomi Swachatha Abiyan is a cleanliness campaign in Mathura that aims to clean up the streets, roads and various infrastructures of the Mathura urban and rural areas. This cleanliness drive is being carried out to pay a tribute to Mahatma Gandhi who had envisioned India as a clean country free of unpleasant sites and diseases. The main motto of this cleanliness drive is to achieve a disease-free India.
                </p>
                <p>
                  Team Brijbhoomi Swachatha Abhiyaan plays a very crucial role in the promotion of Swachh Bharat Abiyan. They work in direct contact with the local people. Keeping the city clean is everyone's duty and to ensure that people are made aware of this civic duty, NGOs play a very crucial role.
                </p>
              </div>
            </div>
          </div>


          {/* 2. NAARI SHAKTI KO PRANAAM */}
          <div id="naari-shakti" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-7 lg:order-1 space-y-6 cinematic-reveal">
              <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                2. NAARI SHAKTI KO PRANAAM
              </h3>
              
              <p className="text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
                Naari Shakti Ko Pranaam was started by Mr Ashwani Choudhary, founder of Brijbhoomi Foundation, on International Women's Day (8 March 2018) by lighting 5100 diyas at the mythological pool "Shiv Tal" of Mathura, with the aim of "Ek Diya Matr Shakti Ke Naam Ka".
              </p>
              
              <div className="space-y-4 text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                <p>
                  To honor their work in front of the world by taking the hidden talents in Brijbhoomi, working in selfless society, taking the society forward and encouraging others and taking them forward on one platform, the Brijbhoomi Foundation has given a salute to women power as "Naari Shakti Ko Pranaam".
                </p>
                <p>
                  In the Vedas, women have a very important, dignified, high position. There is no such beautiful description of women's education-initiation, modesty, virtues, duties, rights and social role in any scripture of the world. Women should be motivated towards solutions in today's challenging environment by becoming epoch-making, for this purpose it is needed.
                </p>
                <p>
                  It is an attempt to give this message to women through Naari Shakti Ko Pranaam, that even today women are discharging their role in various fields. Today women are in a capable role in every field, religious, social, economic, political, art, sports, scientific or as far as we can imagine.
                </p>
                <p>
                  Naari Shakti Ko Pranam aims to acknowledge and recognize the services of individuals and institutions who have made valuable contributions to the empowerment of women. Through this platform, such people have to be brought to the fore who have set a benchmark for change in the society for the younger generation and women.
                </p>
                <p>
                  With the blessings of Radhe Rani, under the aegis of Brijbhoomi Foundation, Naari Shakti Ko Pranaam has reached 14 states of India.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/about image/About us/IMG-20170120-WA0233.jpg"
                  alt="Naari Shakti Ko Pranaam Women Empowerment Campaign"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Women Empowerment</span>
                </div>
              </div>
            </div>
          </div>


          {/* 3. SHRI RUDRA GURUKUL */}
          <div id="gurukul" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-5 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/children_education.png"
                  alt="Shri Rudra Gurukul Education Program"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Holistic Education</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 cinematic-reveal">
              <div>
                <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                  3. SHRI RUDRA GURUKUL
                </h3>
                <p className="text-xs text-[#B67A2A] font-sora font-semibold uppercase tracking-wider mt-1">
                  Vidya + Sadvidya + Brahmavidya
                </p>
              </div>

              {/* Speech bubble quotes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "What is TV showing our children?",
                  "What do they do on internet?",
                  "What do you expect him to learn?",
                  "And what do you think they will actually learn?",
                  "What is our Future?"
                ].map((q, idx) => (
                  <div key={idx} className="p-4 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[12px] italic text-[#4E4E4E] text-xs font-medium relative shadow-sm">
                    "{q}"
                  </div>
                ))}
              </div>

              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                Along with International Standard Online Educational services, Shri Om Gurukul answers all these questions with its dedicated efforts in inculcating Moral Values & Spirituality along with world class Education in its students. Shri Rudra Gurukul is leading good to great living in the society by transforming (online) the lives of students through Vidya, Sadvidya & Brahmavidya.
              </p>

              {/* Few Concerns Box */}
              <div className="premium-card p-6 space-y-4">
                <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">Few concerns of child development:</span>
                <ul className="space-y-2">
                  {[
                    "Why such a mad-rush for Marks & Ranks, can they actually judge my child?",
                    "Aren't we pressurizing our kids & killing their hidden skills, talent & creativity in competition?",
                    "Why can't we equally focus on Extra-curricular activities & Sports, has that nothing to do with his future?",
                    "What if we cannot spend time with child properly at home, due to work?",
                    "What if my child has a unique talent, but just not so good at Studies?",
                    "How to handle my child's behaviour? He argues & disobeys.",
                    "How to balance between Western Culture & Indian Culture?"
                  ].map((concern, idx) => (
                    <li key={idx} className="text-xs text-[#555555] leading-relaxed font-inter font-normal flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0 mt-1.5" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                <p>
                  Gurukuls played an important role in the development of Indian civilization and culture.
                </p>
                <p>
                  Shri Rudra Gurukul is dedicated to nurture responsive and motivated students through a dynamic and success-oriented education program.
                </p>
                <p>
                  Shri Rudra Gurukul's strong value system is the only one-stop solution for 21st century concerns of children, parents & society for the framework is designed on the proven principles of ancient & transformational Gurukul Value System.
                </p>
                <p>
                  We strive the best practices through various tools and techniques to inculcate these values into the children adapting to present social and cultural changes. This leads to our practice of Transforming Life through:
                </p>
                <p className="font-semibold text-[#1F1F1F]">
                  Vidya (Modern Education) + Sadvidya (Traditional Education) + Brahmavidya (Spiritual Education)
                </p>
              </div>
            </div>
          </div>


          {/* 4. SHRI RUDRA GAUSHALA */}
          <div id="gaushala" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-7 lg:order-1 space-y-6 cinematic-reveal">
              <div>
                <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                  4. SHRI RUDRA GAUSHALA
                </h3>
                <p className="text-xs text-[#B67A2A] font-sora font-semibold uppercase tracking-wider mt-1">
                  (Upcoming)
                </p>
              </div>
              
              <blockquote className="p-6 bg-[#FCFAF5] border-l-4 border-[#B67A2A] space-y-4 italic text-xs md:text-sm text-[#3E3E3E] font-medium rounded-[8px] shadow-sm">
                <p>
                  "Lord Krishna Himself wishes: May cow remain in front of me. May cow remain behind me. May Cow remain all around me And may I reside in the middle of cows."
                </p>
                <p>
                  "Gently caressing a cow, feeding a cow, and by walking in full circle around a cow (Parikrama), makes a cow happy and when a cow is content, it pleases Krishna. The truth is that a Cow and Krishna are one and the same. The only difference is that Krishna in his form is difficult to see but Krishna in the form of cow can easily be seen."
                </p>
                <p>
                  "Destroyer of sins! You are the mother of all Deities. You are the reason for yadnya (sacrificial fire). Among all Tirthas (Holy places), you are the holiest. I pay my obeisance to you."
                </p>
              </blockquote>
              
              <div className="space-y-4 text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                <p>
                  Shri Rudra Gaushala is established with a determined mind set to work ceaselessly, selflessly & devotedly for protection, preservation and enhancement of indigenous Cow breed of India.
                </p>
                <p>
                  The fundamental idea is to create such an environment topographically, ecologically, socially & politically, so that cow inhabiting in the country shall breathe fearlessly and the lost glory & sacredness of mother cow can be restored. But as we are moving on, the paradigm is getting broader.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/shri_rudra_gaushala.png"
                  alt="Shri Rudra Gaushala Cow Protection Program"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Cow Protection</span>
                </div>
              </div>
            </div>
          </div>


          {/* 5. SHRI RUDRA ASHRAY SEWA SADAN */}
          <div id="sewa-sadan" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-5 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/elderly_care.png"
                  alt="Shri Rudra Ashray Sewa Sadan Elderly Care"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Elderly Care & Support</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 cinematic-reveal">
              <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                5. SHRI RUDRA ASHRAY SEWA SADAN
              </h3>
              
              <p className="text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
                "Working for the destitute and abandoned elderly and providing them shelter, food, healthcare, love and respect" with a strong belief that helping older people and spreading awareness about elder care will not only give them a new life, but it will also reduce the issue of elder abuse in the society.
              </p>
              
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                We believe in the concept of "Vasudev Kutumbakam" which means our family, which inspires us to serve every needy old man as a member of our own family. As the future is going to be largely for seniors and older people, this is the need of the hour. People also confuse retirement living and assisted living. But both are not same. Assisted living goes beyond retirement living. People between the ages of 60 and 70 can be happy while being free to take care of their daily needs. But beyond that, when they get sick and old, it's the need of the hour.
              </p>

              {/* Objectives & Requirements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Objectives */}
                <div className="premium-card p-6 space-y-3 bg-[#FCFAF5]">
                  <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">OBJECTIVE</span>
                  <ul className="space-y-2">
                    {[
                      "Persons who wish to stay away after the marriage of their children",
                      "Whose children are residing or settled in other states of India or in any other country",
                      "Persons who wish to serve the human society",
                      "Individuals who wish to live in a peaceful and secure environment after their retirement",
                      "Individuals who have not married and become senior",
                      "Couples who do not have either children or people to care for"
                    ].map((item, idx) => (
                      <li key={idx} className="text-[11px] text-[#555555] leading-relaxed font-inter font-normal flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="premium-card p-6 space-y-3 bg-[#FCFAF5]">
                  <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">REQUIREMENT</span>
                  <ul className="space-y-2">
                    {[
                      "Joint family system",
                      "Single child family residence",
                      "Rising cost of employment outside the home",
                      "Reduction in maintenance costs",
                      "Resources needed for the house",
                      "Differences between needs",
                      "Differences between opinions",
                      "Freedom",
                      "Disadvantages of living alone through servants",
                      "House in the absence of medical aid and assistance"
                    ].map((item, idx) => (
                      <li key={idx} className="text-[11px] text-[#555555] leading-relaxed font-inter font-normal flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* 6. COVID HELPLINE-19 */}
          <div id="covid-helpline" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-[#D8C6A8]/30 pt-16 scroll-mt-24">
            <div className="lg:col-span-7 lg:order-1 space-y-6 cinematic-reveal">
              <h3 className="text-2xl md:text-3xl font-sora font-semibold text-[#1F1F1F]">
                6. COVID HELPLINE-19
              </h3>
              
              <p className="text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
                With the help of our dedicated volunteers, a Covid helpline was run in 62 districts of the country, under which Brijbhoomi Blood Donor Club was also established and in which all the people came forward to join hands with each other.
              </p>
              
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                I thank the Naari Shakti Pranam team, the Brijbhoomi Swachatha Abhiyaan team, the administration of 62 districts and all those people associated with the Brijbhoomi Foundation who did selfless service day and night in the Covid Helpline during the Corona epidemic.
              </p>
            </div>

            <div className="lg:col-span-5 lg:order-2 cinematic-reveal">
              <div className="group overflow-hidden rounded-[20px] border border-[#D8C6A8]/60 shadow-md aspect-[4/3] relative">
                <img
                  src="/about image/About us/IMG-20210706-WA0633.jpg"
                  alt="Covid Helpline-19 Community Support Campaign"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Covid Community Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
