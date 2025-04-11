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
  { id: 4, imgUrl: "/images/boy-icon.png", title: "طلال التميمي", description: "المسؤول الإداري", linkedinUrl: "http://linkedin.com/in/talal-altamimi-7a5561267" },
  { id: 5, imgUrl: "/images/boy-icon.png", title: "خالد الشثري", description: "قائد اللجنة العلمية التقنية", linkedinUrl: "https://www.linkedin.com/in/khaled-alshathri?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJPhwsZzBTYWvkv0eRrHmmg%3D%3D" },
  { id: 6, imgUrl: "/images/girl-icon.png", title: "رغد العسيري", description: "قائدة اللجنة التنفيذية", linkedinUrl: "https://www.linkedin.com/in/raghad-alassiri-155277221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 7, imgUrl: "/images/boy-icon.png", title: "حنين المطيري", description: "قائد لجنة الموارد البشرية", linkedinUrl: "https://www.linkedin.com/in/haneen-almutairi-b3b01532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 8, imgUrl: "/images/girl-icon.png", title: "رزان المقوشي", description: " قائدة لجنة العلاقات العامة ", linkedinUrl: "https://www.linkedin.com/in/razan-almuqwishi/" },
  { id: 9, imgUrl: "/images/girl-icon.png", title: "رغد الهزاني ", description: "قائدة اللجنة الإعلامية", linkedinUrl: "https://www.linkedin.com/in/raghad-alhazzani-391406281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
];

const smallCards = [
  { id: 12, imgUrl: "/images/girl-icon.png", title: "ريوف الداود", description: "نائبة اللجنة الإعلامية", linkedinUrl: "https://Linkedin.com/in/reyof-aldawod-ba6065299" },
  { id: 13, imgUrl: "/images/girl-icon.png", title: "رغد العسيري", description: "نائبة لجنة الموارد البشرية", linkedinUrl: "https://www.linkedin.com/in/raghad-alassiri-155277221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 14, imgUrl: "/images/boy-icon.png", title: "بدر الزهراني", description: "قائد فريق شؤون الأعضاء", linkedinUrl: "https://www.linkedin.com/in/badermalzahrani/" },
  { id: 15, imgUrl: "/images/girl-icon.png", title: "رغد الهزاني", description: "نائبة فريق شؤون الأعضاء", linkedinUrl: "https://www.linkedin.com/in/raghad-alhazzani-391406281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 16, imgUrl: "/images/girl-icon.png", title: "إيلاف الشهري", description: "قائدة فريق شؤون المستفيدين", linkedinUrl: "http://www.linkedin.com/in/ElafAlshehri" },
  { id: 17, imgUrl: "/images/girl-icon.png", title: "هتاف السويلم", description: "نائبة فريق شؤون المستفيدين", linkedinUrl: "http://www.linkedin.com/in/hetaf-alsuwailem-564a99308" },
  { id: 18, imgUrl: "/images/boy-icon.png", title: "عبدالعزيز بن نشوان", description: "نائب اللجنة التنفيذية", linkedinUrl: "https://www.linkedin.com/in/abdulaziz-binnashwan/" },
  { id: 19, imgUrl: "/images/girl-icon.png", title: "حنان الخميس", description: "المساعد الإداري للجنة التنفيذية", linkedinUrl: "https://www.linkedin.com" },
  { id: 20, imgUrl: "/images/boy-icon.png", title: "محمد الصعب", description: "نائب لجنة العلاقات العامة", linkedinUrl: "https://www.linkedin.com/in/mohammed-alsaab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 21, imgUrl: "/images/girl-icon.png", title: "منه سليمان", description: "نائب لجنة العلاقات العامة", linkedinUrl: "https://www.linkedin.com/in/menna-suliman-189882336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 22, imgUrl: "/images/boy-icon.png", title: "فهد السياري", description: "قائد فريق التسويق", linkedinUrl: "https://www.linkedin.com/in/fahad-alsayari-428923251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 23, imgUrl: "/images/girl-icon.png", title: "شادن المسعود", description: "نائبة اللجنة العلمية التقنية", linkedinUrl: "https://www.linkedin.com/in/shaden-almasaud-4a985026b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 24, imgUrl: "/images/girl-icon.png", title: "غلا العسيري", description: "مستشار اللجنة الإعلامية", linkedinUrl: "https://www.linkedin.com/in/ghala-alasiri-07214123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 25, imgUrl: "/images/girl-icon.png", title: "شهد العيدروس", description: "قائدة فريق التصميم", linkedinUrl: "https://www.linkedin.com/in/shahad-hassan-5a6b25168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 26, imgUrl: "/images/girl-icon.png", title: "حصة الدخيل", description: "نائبة فريق التصميم", linkedinUrl: "https://www.linkedin.com" },
  { id: 27, imgUrl: "/images/girl-icon.png", title: "الجوهرة السلمي", description: "قائدة فريق الأبحاث", linkedinUrl: "http://linkedin.com/in/aljoharah-alsulami" },
  { id: 28, imgUrl: "/images/girl-icon.png", title: "رنا النجاشي", description: "نائبة فريق الأبحاث", linkedinUrl: "https://sa.linkedin.com/in/ranaalngashy" },
  { id: 29, imgUrl: "/images/boy-icon.png", title: "عبدالعزيز الشبلي", description: "قائد فريق التدريب", linkedinUrl: "https://www.linkedin.com" },
  { id: 30, imgUrl: "/images/boy-icon.png", title: "المثنى الزهراني", description: "نائب فريق التدريب", linkedinUrl: "https://www.linkedin.com" },
  { id: 31, imgUrl: "/images/girl-icon.png", title: "لنا التركي", description: "قائدة فريق التصوير والمونتاج", linkedinUrl: "https://linkedin.com/in/lana-alturki" },
  { id: 32, imgUrl: "/images/girl-icon.png", title: "سارة الصبيحي", description: "نائبة فريق التصوير والمونتاج", linkedinUrl: "https://www.linkedin.com/in/sarah-alsubaihi-85b997310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 33, imgUrl: "/images/girl-icon.png", title: "حنان الشاوي", description: "قائدة فريق المحتوى", linkedinUrl: "https://www.linkedin.com" },
  { id: 34, imgUrl: "/images/girl-icon.png", title: "منيرة غزواني", description: "نائبة فريق المحتوى", linkedinUrl: "https://www.linkedin.com/in/munira-a-ghazwani-9a9b62217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
];
