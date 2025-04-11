import React from "react";
import { FaLinkedin } from "react-icons/fa";

const MembersCards = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl space-y-16">
        
        {/* Large Cards */}
        <div className="flex flex-wrap gap-24 justify-center pt-44">
          {largeCards.map((post) => (
            <Post key={post.id} {...post} size="large" />
          ))}
        </div>

        {/* Medium Cards */}
        <div className="flex flex-wrap gap-16 justify-center pt-24">
          {mediumCards.map((post) => (
            <Post key={post.id} {...post} size="medium" />
          ))}
        </div>

        {/* Small Cards */}
        <div className="flex flex-wrap gap-12 justify-center pt-24 pb-44">
          {smallCards.map((post) => (
            <Post key={post.id} {...post} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, title, description, size, linkedinUrl }) => {
  let cardWidth, cardHeight, fontSizeTitle, fontSizeDescription;

  switch (size) {
    case "large":
      cardWidth = 215;
      cardHeight = 215;
      fontSizeTitle = "text-3xl";
      fontSizeDescription = "text-base";
      break;
    case "medium":
      cardWidth = 160;
      cardHeight = 160;
      fontSizeTitle = "text-xl";
      fontSizeDescription = "text-sm";
      break;
    case "small":
      cardWidth = 150;
      cardHeight = 100;
      fontSizeTitle = "text-md";
      fontSizeDescription = "text-xs";
      break;
    default:
      cardWidth = 300;
      cardHeight = 300;
      fontSizeTitle = "text-2xl";
      fontSizeDescription = "text-sm";
  }

  return (
    <div
      className="flex flex-col items-center relative shrink-0 cursor-pointer justify-items-center transition-transform hover:-translate-y-1"
      style={{
        width: cardWidth,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 w-full rounded-full hover:shadow-xl object-cover justify-center"
        style={{ height: cardHeight, width: cardHeight }}
        alt={`An image for a blog post titled ${title}`}
      />
      <p className={`mt-4 ${fontSizeTitle} text-center font-bold`}>{title}</p>
      <div className="flex items-center justify-center mt-2 text-center text-neutral-500">
        <p className={`${fontSizeDescription} ml-2 mr-1`}>{description}</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            className="ml-1 text-blue-600 transition-transform duration-200 transform hover:scale-125"
            size={16}
          />
        </a>
      </div>
    </div>
  );
};

export default MembersCards;

const largeCards = [
  { id: 1, imgUrl: "/images/girl-icon.png", title: "لمى الشديّد", description: "رئيسة المبادرة", linkedinUrl: "https://www.linkedin.com/in/lama-alshudayyid-343355285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 2, imgUrl: "/images/girl-icon.png", title: "لمى الغيلان", description: "نائبة رئيسة المبادرة", linkedinUrl: "http://linkedin.com/in/lama-alghailan-352423214" },
  { id: 3, imgUrl: "/images/boy-icon.png", title: "زَين الصمل", description: "مستشار المبادرة", linkedinUrl: "https://www.linkedin.com/in/zain-alsamal " },
];

const mediumCards = [
  { id: 4, imgUrl: "/images/boy-icon.png", title: "خالد الشثري", description: "قائد اللجنة العلمية التقنية", linkedinUrl: "https://www.linkedin.com/in/khaled-alshathri?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJPhwsZzBTYWvkv0eRrHmmg%3D%3D" },
  { id: 5, imgUrl: "/images/girl-icon.png", title: "رغد العسيري", description: "قائدة اللجنة التنفيذية", linkedinUrl: "https://www.linkedin.com/in/raghad-alassiri-155277221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 6, imgUrl: "/images/girl-icon.png", title: "حنين المطيري", description: "المسؤولة القانونية", linkedinUrl: "https://www.linkedin.com/in/haneen-almutairi-b3b01532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 7, imgUrl: "/images/girl-icon.png", title: "ساره اللحيدان ", description: "قائد اللجنة العلمية التقنية", linkedinUrl: "http://linkedin.com/in/sarah-alluhaidan-50a55a290" },
  { id: 8, imgUrl: "/images/girl-icon.png", title: "ليان الصيخان ", description: " قائدة لجنة العلاقات العامة ", linkedinUrl: "https://www.linkedin.com/in/layan-alsaykhan-80a008271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 9, imgUrl: "/images/girl-icon.png", title: "رغد الهزاني ", description: "قائدة اللجنة الإعلامية", linkedinUrl: "https://www.linkedin.com/in/raghad-alhazzani-391406281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
];

const smallCards = [
  { id: 10, imgUrl: "/images/girl-icon.png", title: "اميره القباع ", description: "نائبة لجنة العلاقات العامة", linkedinUrl: "https://www.linkedin.com/in/amira-allqabbaa-723448216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 11, imgUrl: "/images/boy-icon.png", title: "سليمان مخانق ", description: "نائب اللجنة التنفيذية", linkedinUrl: "https://www.linkedin.com/in/sulaiman-mokhaniq" },
  { id: 12, imgUrl: "/images/boy-icon.png", title: "عبدالعزيز الشويعر", description: "نائب لجنة الموارد البشرية", linkedinUrl: "https://www.linkedin.com/in/abdulaziz-alshuwaier-18673b328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 13, imgUrl: "/images/girl-icon.png", title: "منار الرزين", description: "نائبة اللجنة الاعلامية", linkedinUrl: "https://www.linkedin.com/in/manar-a-688582214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 14, imgUrl: "/images/girl-icon.png", title: "ميادة الحافي ", description: "نائبة فريق التصميم", linkedinUrl: "https://www.linkedin.com/in/mayada-alhafi-13a56a242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 15, imgUrl: "/images/girl-icon.png", title: "عائشة ريكلي", description: "قائدة فريق التسويق", linkedinUrl: "https://www.linkedin.com/in/aicharikli443?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 16, imgUrl: "/images/girl-icon.png", title: "ريوف السويداني", description: "نائبة فريق التسويق", linkedinUrl: "https://www.linkedin.com/in/ryooufalsuwidany?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 17, imgUrl: "/images/girl-icon.png", title: "جمانه ابوراس", description: "قائدة فريق التصوير والمونتاج", linkedinUrl: "https://www.linkedin.com" },
  { id: 18, imgUrl: "/images/girl-icon.png", title: "شهد الحليبه ", description: "نائبة فريق التصوير والمونتاج", linkedinUrl: "https://www.linkedin.com/in/shahad-alhulaybah-863342270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 19, imgUrl: "/images/boy-icon.png", title: "عبدالله الراشدي", description: "قائد فريق المحتوى", linkedinUrl: "https://www.linkedin.com" },
  { id: 20, imgUrl: "/images/boy-icon.png", title: "أحمد السماعيل", description: "نائب فريق المحتوى", linkedinUrl: "https://www.linkedin.com/in/ahmad-lsmaeil-92a9b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 21, imgUrl: "/images/boy-icon.png", title: "طلال عبدالدائم ", description: "قائد فريق التيك توك", linkedinUrl: "https://www.linkedin.com/in/talal-abduldaem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 22, imgUrl: "/images/girl-icon.png", title: "جود القحطاني", description: "قائدة فريق التصميم", linkedinUrl: "https://www.linkedin.com/in/talal-abduldaem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_appp" },
];
