import { createContext, useEffect, useState } from "react";
import { getCaseStudy } from "./functions";

const CaseStudyContext = createContext();

const CaseStudyProvider = ({ children }) => {
  const [caseStudy, setCaseStudy] = useState([]);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState();
  const fetchCaseStudy = async () => {
    const caseStudies = [];
    const csd = await getCaseStudy();
    console.log(csd);

    if (csd.length === 0) {
      return;
    }
    csd.forEach((study) => {
      caseStudies.push(study);
    });

    setCaseStudy(caseStudies);
  };
  useEffect(() => {
    fetchCaseStudy();
  }, []);

  const fetchCaseStudyBySlug = async (slug) => {
    console.log("fetchBlogBySlug" + slug);

    if (caseStudy.length === 0) {
      await fetchCaseStudy();
    }
    const study = caseStudy.filter((csd) => csd.slug === slug);
    if (study === undefined || study.length === 0) {
      return;
    }

    setSelectedCaseStudy(study[0]);
  };
  // Add an empty dependency array to run this effect only once.

  return (
    <CaseStudyContext.Provider
      value={{
        caseStudy,
        setCaseStudy,
        selectedCaseStudy,
        setSelectedCaseStudy,
        fetchCaseStudyBySlug,
      }}
    >
      {children}
    </CaseStudyContext.Provider>
  );
};

export { CaseStudyContext, CaseStudyProvider };
