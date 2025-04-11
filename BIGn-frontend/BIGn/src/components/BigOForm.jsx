import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function BigOForm() {
  // State for additional team members (0 to 2) – total members become 1 + additionalMembers.
  const [additionalMembers, setAdditionalMembers] = useState(0);
  // State to store the uploaded CV file (if any)
  const [cvFile, setCvFile] = useState(null);

  const addMember = () => {
    if (additionalMembers < 2) {
      setAdditionalMembers((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full py-32 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">

        
        <h1 className="text-3xl font-bold text-center mb-6">
          سجل في مسابقة Big O's الأن!
        </h1>

        {/* Instructions Block */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded mb-6 text-sm text-gray-700">
          <p className="mb-1">
            ١- يجب أن يكون المتقدم طالباً جامعياً سواء كان دبلوم، بكالوريس أو ماجستير بغض النظر عن التخصص.
          </p>
          <p className="mb-1">
            ٢- يتكون كل فريق من ٣ أعضاء فقط (لا أقل ولا أكثر).
          </p>
          <p className="mb-1">
            ٣- يجب أن يكون أعضاء الفريق من نفس الجامعة (لا يشترط نفس التخصص أو المستوى الدراسي).
          </p>
          <p>
            ٤- يلتزم جميع المتقدمين بحضور يوم المسابقة التجريبية ويوم المسابقة الفعلية (على الرغم من أن حضور المعسكر التدريبي ليس شرطاً).
          </p>
        </div>

        <form className="space-y-6">
          {/* 1. الاسم الرباعي باللغة العربية */}
          <div>
            <label className="block text-sm font-medium mb-1">
              الاسم الرباعي باللغة العربية
            </label>
            <input
              type="text"
              placeholder="الاسم كما سيظهر في الشهادة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              كما سيظهر بالشهادة
            </p>
          </div>

          {/* 2. الاسم الرباعي باللغة الانجليزية */}
          <div>
            <label className="block text-sm font-medium mb-1">
              الاسم الرباعي باللغة الانجليزية
            </label>
            <input
              type="text"
              placeholder="الاسم كما سيظهر في الشهادة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              كما سيظهر بالشهادة
            </p>
          </div>

          {/* 3. رقم الجوال */}
          <div>
            <label className="block text-sm font-medium mb-1">رقم الجوال</label>
            <input
              type="text"
              placeholder="أدخل رقم الجوال"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 4. الايميل */}
          <div>
            <label className="block text-sm font-medium mb-1">الايميل</label>
            <input
              type="email"
              placeholder="يرجى التسجيل بالإيميل الشخصي"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              يشترط أن لا يكون ايميل جامعي؛ سجّل بالإيميل الشخصي.
            </p>
          </div>

          {/* 5. الجنس */}
          <div>
            <label className="block text-sm font-medium mb-1">الجنس</label>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-300 rounded px-3 py-2 pr-10 placeholder:text-xs sm:placeholder:text-sm">
                <option value="" style={{ color: "#a0aec0" }}>
                  غير محدد
                </option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.064 10 14.064 4 8.064z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 6. الجنسية */}
          <div>
            <label className="block text-sm font-medium mb-1">الجنسية</label>
            <input
              type="text"
              placeholder="أدخل الجنسية"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 7. الرقم الجامعي */}
          <div>
            <label className="block text-sm font-medium mb-1">الرقم الجامعي</label>
            <input
              type="text"
              placeholder="أدخل الرقم الجامعي"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 8. المستوى الدراسي */}
          <div>
            <label className="block text-sm font-medium mb-1">المستوى الدراسي</label>
            <input
              type="text"
              placeholder="أدخل المستوى الدراسي"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 9. الجامعة */}
          <div>
            <label className="block text-sm font-medium mb-1">الجامعة</label>
            <input
              type="text"
              placeholder="أدخل اسم الجامعة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 10. المدينة/المنطقة */}
          <div>
            <label className="block text-sm font-medium mb-1">المدينة/المنطقة</label>
            <input
              type="text"
              placeholder="أدخل المدينة/المنطقة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 11. التخصص الجامعي / الأكاديمي */}
          <div>
            <label className="block text-sm font-medium mb-1">
              التخصص الجامعي / الأكاديمي
            </label>
            <input
              type="text"
              placeholder="أدخل التخصص الجامعي / الأكاديمي"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 12. سنة التخرج والشهر */}
          <div>
            <label className="block text-sm font-medium mb-1">
              سنة التخرج والشهر
            </label>
            <input
              type="text"
              placeholder="مثال: 2023-06"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 13. حساب لينكدان (غير إجباري) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              حساب لينكدان (غير إجباري)
            </label>
            <input
              type="text"
              placeholder="رابط حساب لينكدان"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 14. CV (غير إجباري) */}
          <div>
            <label className="block text-sm font-medium mb-1">CV (غير إجباري)</label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setCvFile(e.target.files[0]);
                }
              }}
            />
            {cvFile && (
              <div className="flex items-center text-green-600 mt-1 text-sm">
                <FaCheckCircle className="mr-1" />
                تم رفع الملف بنجاح
              </div>
            )}
          </div>

          {/* 15. هل سبق لك المشاركة في النسخ السابقة لـ BIG O's؟ */}
          <div>
            <label className="block text-sm font-medium mb-1">
              هل سبق لك المشاركة في النسخ السابقة لـ BIG O's؟
            </label>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-300 rounded px-3 py-2 pr-10 placeholder:text-xs sm:placeholder:text-sm">
                <option value="" style={{ color: "#a0aec0" }}>غير محدد</option>
                <option value="yes">نعم</option>
                <option value="no">لا</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.064 10 14.064 4 8.064z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 16. هل سبق لك المشاركة في saudi CPC؟ */}
          <div>
            <label className="block text-sm font-medium mb-1">
              هل سبق لك المشاركة في saudi CPC؟
            </label>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-300 rounded px-3 py-2 pr-10 placeholder:text-xs sm:placeholder:text-sm">
                <option value="" style={{ color: "#a0aec0" }}>غير محدد</option>
                <option value="yes">نعم</option>
                <option value="no">لا</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.064 10 14.064 4 8.064z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 17. كيف سمعت عن مسابقة BIG O's؟ */}
          <div>
            <label className="block text-sm font-medium mb-1">
              كيف سمعت عن مسابقة BIG O's؟
            </label>
            <input
              type="text"
              placeholder="أدخل الطريقة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 18. هل هذه أول مرة تسمع عنها مسابقة CPC؟ */}
          <div>
            <label className="block text-sm font-medium mb-1">
              هل هذه أول مرة تسمع عنها مسابقة CPC؟
            </label>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-300 rounded px-3 py-2 pr-10 placeholder:text-xs sm:placeholder:text-sm">
                <option value="" style={{ color: "#a0aec0" }}>غير محدد</option>
                <option value="yes">نعم</option>
                <option value="no">لا</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.064 10 14.064 4 8.064z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 19. تحدث عن خبراتك في البرمجة */}
          <div>
            <label className="block text-sm font-medium mb-1">
              تحدث عن خبراتك في البرمجة :
            </label>
            <textarea
              rows="4"
              placeholder="أدخل خبراتك في البرمجة"
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
            />
          </div>

          {/* 20. التعهد */}
          <div>
            <div className="flex items-center">
              <input type="checkbox" className="ml-2" />
              <span>أقر بصحة المعلومات وأتعهد بعدم الانسحاب من المشاركة.</span>
            </div>
            <p className="text-xs text-blue-600 mt-1">
              <a
                href="https://drive.google.com/file/d/..."
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                الاطلاع على اللائحة التنظيمية للمشاركين
              </a>
            </p>
          </div>

          {/* إضافة عضو */}
          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-4">إضافة عضو</h2>
            {Array.from({ length: additionalMembers }).map((_, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded mb-4">
                <h3 className="text-xl font-bold mb-2">عضو الفريق {index + 2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">رقم الجوال</label>
                    <input
                      type="text"
                      placeholder="رقم الجوال"
                      className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">الايميل</label>
                    <input
                      type="email"
                      placeholder="الايميل"
                      className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">الرقم الجامعي</label>
                    <input
                      type="text"
                      placeholder="الرقم الجامعي"
                      className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">الجامعة</label>
                    <input
                      type="text"
                      placeholder="الجامعة"
                      className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
            {additionalMembers < 2 && (
              <button
                type="button"
                onClick={addMember}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded mb-4"
              >
                {additionalMembers === 0
                  ? "إضافة العضو الثاني"
                  : "إضافة العضو الثالث"}
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#360E91] hover:bg-[#4c19c2] text-white py-3 rounded font-bold">
            تسجيل
          </button>
        </form>
      </div>
    </section>
  );
}

export default BigOForm;
