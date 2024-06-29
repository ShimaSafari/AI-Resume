import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* personal datail */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      {/* summary */}
      <SummaryPreview resumeInfo={resumeInfo} />

      {/* professional experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* educational detail */}
      <EducationalPreview resumeInfo={resumeInfo} />

      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
