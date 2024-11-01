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
      cardWidth = 250;
      cardHeight = 250;
      fontSizeTitle = "text-3xl";
      fontSizeDescription = "text-base";
      break;
    case "medium":
      cardWidth = 175;
      cardHeight = 175;
      fontSizeTitle = "text-2xl";
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
      className="relative shrink-0 cursor-pointer justify-items-center transition-transform hover:-translate-y-1"
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
  { id: 1, imgUrl: "/images/girl-icon.png", title: "لمى الشديّد", description: "رئيسة المبادرة", linkedinUrl: "https://www.linkedin.com/in/lama-shd/" },
  { id: 2, imgUrl: "/images/girl-icon.png", title: "لمى الغيلان", description: "نائبة رئيسة المبادرة", linkedinUrl: "https://www.linkedin.com/in/lama-gh/" },
];

const mediumCards = [
  { id: 3, imgUrl: "/images/boy-icon.png", title: "عبدالله الزهراني", description: "عضو فريق المبادرة", linkedinUrl: "https://www.linkedin.com/in/abdullah-zahrani/" },
  { id: 4, imgUrl: "/images/girl-icon.png", title: "ريم الناصر", description: "مسؤول التسويق", linkedinUrl: "https://www.linkedin.com/in/reem-naser/" },
  { id: 5, imgUrl: "/images/boy-icon.png", title: "بدر القحطاني", description: "مساعد تقني", linkedinUrl: "https://www.linkedin.com/in/bader-q/" },
  { id: 6, imgUrl: "/images/girl-icon.png", title: "نورة الشهري", description: "مدير المشاريع", linkedinUrl: "https://www.linkedin.com/in/nora-shahri/" },
  { id: 7, imgUrl: "/images/boy-icon.png", title: "سامي الحربي", description: "محلل بيانات", linkedinUrl: "https://www.linkedin.com/in/sami-harbi/" },
  { id: 8, imgUrl: "/images/girl-icon.png", title: "فاطمة العتيبي", description: "أخصائي موارد بشرية", linkedinUrl: "https://www.linkedin.com/in/fatima-at/" },
  { id: 9, imgUrl: "/images/girl-icon.png", title: "أحمد السديري", description: "مسؤول التواصل", linkedinUrl: "https://www.linkedin.com/in/ahmed-sd/" },
  { id: 10, imgUrl: "/images/boy-icon.png", title: "أروى الطاسان", description: "مهندس برمجيات", linkedinUrl: "https://www.linkedin.com/in/arwa-tsn/" },
];

const smallCards = [
  { id: 11, imgUrl: "/images/girl-icon.png", title: "عبدالعزيز الدوسري", description: "قائد الفريق", linkedinUrl: "https://www.linkedin.com/in/aziz-dosari/" },
  { id: 12, imgUrl: "/images/boy-icon.png", title: "سهى المنيف", description: "مستشار استراتيجي", linkedinUrl: "https://www.linkedin.com/in/soha-mnif/" },
  { id: 13, imgUrl: "/images/girl-icon.png", title: "منى الحربي", description: "مساعد تنفيذي", linkedinUrl: "https://www.linkedin.com/in/mona-harbi/" },
  { id: 14, imgUrl: "/images/girl-icon.png", title: "حسن السيف", description: "مدير موارد بشرية", linkedinUrl: "https://www.linkedin.com/in/hassan-saif/" },
  { id: 15, imgUrl: "/images/boy-icon.png", title: "ليلى الماجد", description: "أخصائي إعلامي", linkedinUrl: "https://www.linkedin.com/in/laila-majed/" },
  { id: 16, imgUrl: "/images/girl-icon.png", title: "طلال القحطاني", description: "خبير تقني", linkedinUrl: "https://www.linkedin.com/in/talal-qahtani/" },
  { id: 17, imgUrl: "/images/girl-icon.png", title: "ميسر الزهراني", description: "مدير الحسابات", linkedinUrl: "https://www.linkedin.com/in/mayser-zahrani/" },
  { id: 18, imgUrl: "/images/boy-icon.png", title: "خلود الناصر", description: "أخصائي اجتماعي", linkedinUrl: "https://www.linkedin.com/in/kholoud-naser/" },
  { id: 19, imgUrl: "/images/girl-icon.png", title: "ياسر الحارثي", description: "مدير قسم التطوير", linkedinUrl: "https://www.linkedin.com/in/yasser-harthi/" },
  { id: 20, imgUrl: "/images/boy-icon.png", title: "عائشة العتيبي", description: "مستشار مالي", linkedinUrl: "https://www.linkedin.com/in/aisha-at/" },
  { id: 21, imgUrl: "/images/boy-icon.png", title: "رامي الغامدي", description: "رئيس قسم التدريب", linkedinUrl: "https://www.linkedin.com/in/rami-ghamdi/" },
  { id: 22, imgUrl: "/images/boy-icon.png", title: "مي القحطاني", description: "مستشار قانوني", linkedinUrl: "https://www.linkedin.com/in/may-qahtani/" },
  { id: 23, imgUrl: "/images/girl-icon.png", title: "سعد الفهد", description: "منسق فعاليات", linkedinUrl: "https://www.linkedin.com/in/saad-fahd/" },
  { id: 24, imgUrl: "/images/boy-icon.png", title: "رائد العيسى", description: "خبير استشاري", linkedinUrl: "https://www.linkedin.com/in/raed-essa/" },
];
