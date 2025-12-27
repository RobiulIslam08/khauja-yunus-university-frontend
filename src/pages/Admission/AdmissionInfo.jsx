
import PageHeader from "../../components/common/PageHeader";
import AdminisionInfoSectionHeader from "../../components/common/AdminisionInfoSectionHeader";

const AdmissionInfo = () => {
  return (
    <>
      <PageHeader title="Admission Information" />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="e p-8 md:p-12">
          
          {/* Section 1: Admission Procedures */}
          <section className="mb-12">
            <AdminisionInfoSectionHeader title="Admission Procedures" />
            <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
              <ol className="list-decimal list-outside ml-5 space-y-3">
                <li>
                  Collect the prescribed application form from the front desk (Reception) or Admission office of the Khwaja Yunus Ali University (KYAU), Enayetpur, Sirajganj. The application form is also available in our website <a href="http://www.kyau.edu.bd" className="text-blue-600 hover:underline">www.kyau.edu.bd</a>.
                </li>
                <li>
                  Submit the application form to our admission office along with Taka 300/- or a bank draft of equivalent amount as well as your academic documents. The documents to be attached as directed overleaf of the application form.
                </li>
                <li>
                  Selected candidates will be required to collect the 'Registration Request Form' (RRF) from the respective Heads of the Departments.
                </li>
                <li>
                  Candidates need to collect the 'pay-in-slip' from the admission office by submitting the RRF form.
                </li>
                <li>
                  The 'pay-in-slip' duly filled in by the student concerned will be accompanied by an office staff to the Trust Bank, KYAMCH Branch to deposit the money.
                </li>
                <li>
                  On payment of the fees, the payment slips returned by the bank should again be submitted to the admission office again.
                </li>
                <li>
                  The student will then receive a copy from the admission office confirming enrollment of the student (s) to her/his desired program.
                </li>
              </ol>
            </div>
          </section>

          {/* Section 2: How To Apply */}
          <section className="mb-12">
            <AdminisionInfoSectionHeader title="How to Apply?" />
            <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
              <p>
                A student can apply either through our online application system or by collecting our paper-based admission form from Admission Office. Attested photocopies of all certificates, mark sheets, testimonials, 3 passport-size photographs, birth certificate/NID copy & guardians NID copy are required to be submitted with the admission form. For online application, students have to go to the admission page in our website <a href="http://www.kyau.edu.bd" className="text-blue-600 hover:underline">www.kyau.edu.bd</a> and click the link apply here- Undergraduate Program or Graduate Program. At the time of taking admission, selected candidates are required to submit their original mark sheets / transcripts, testimonials and 3 passport-size photographs.
              </p>
            </div>
          </section>

          {/* Sub Sections */}
          
          <SubSection title="Admission on credit Transfer">
            <p>
              Students desiring to transfer their credits are expected to meet the admission requirements stated before for taking admission to any program of the university on credit transfer. Students intending to transfer to KYAU must submit syllabus and official transcripts from previously attended colleges and universities along with the admission applications. Failure to provide either will disqualify the applicants. Such students may be allowed to transfer credits if a minimum of ‘B’ / B+‘ grade is obtained in the respective course or if KYAU Equivalence Committee recommends such credit transfer.
            </p>
          </SubSection>

          <SubSection title="Admission Cancellation">
            <p className="mb-2">Admission of any student may be cancelled by KYAU authority for the following reasons:</p>
            <ol className="list-decimal list-outside ml-5 space-y-1">
              <li>If a student does not continue 2 Semesters consecutively;</li>
              <li>If a student does not pay his/her dues in time;</li>
              <li>If a student fails to produce necessary academic documents to the admission office;</li>
              <li>If a student takes part in any activity that goes against discipline or KYAU rules & regulations;</li>
              <li>If a student submits fake S.S.C/ H.S.C/ Degree or Equivalent Certificate/ Transcript at the time of admission</li>
            </ol>
          </SubSection>

          <SubSection title="Readmission">
            <p>
              KYAU students whose admission have been cancelled must submit an application for readmission. If such students have attended other colleges and universities during their absence from KYAU they must submit official transcripts along with their applications. All such students will have to pay the readmission fee.
            </p>
          </SubSection>

          <SubSection title="Provisional Admission">
            <p>
              KYAU may provisionally accept applicants for admission who cannot produce official transcripts, certificates and other necessary documents at the time of admission. As a prerequisite all provisionally admitted students will be required to submit the appropriate credentials to continue. Required credentials must be submitted within the next semester of initial enrollment. Failure to submit the required papers would result in cancellation of the admission.
            </p>
          </SubSection>

          <SubSection title="Inter departmental Migration">
            <p>An opportunity to migrate from one department to another.</p>
          </SubSection>
          
           <SubSection title="About waiver">
             {/* Content was empty in the provided image, but the header was present */}
             <p className="italic text-gray-500">Please contact the admission office for details regarding waivers.</p>
          </SubSection>

        </div>
      </div>
    </>
  );
};

// Reusable Sub-Section Component to keep main code clean
const SubSection = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
    {/* Matches the red underline style from the image */}
    <div className="h-0.5 w-full bg-orange-500 mb-4 opacity-90"></div>
    <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
      {children}
    </div>
  </section>
);

export default AdmissionInfo;