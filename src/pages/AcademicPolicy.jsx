import PageHeader from '../components/common/PageHeader';

export default function AcademicPolicy() {
	return (
		<>
			<PageHeader title="Academic Policy" />
			<div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Container matching the width in screenshot */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* --- Intro Paragraph --- */}
        <div className="mb-8">
          <p className="text-sm leading-relaxed text-justify">
            Welcome to the Office of the Controller of Examinations. This office is responsible for creation and maintenance of student academic records, academic transcripts, course information, student status and graduation. Khwaja Yunus Ali University is committed to valuing our students and being customer focused. The mission of this University is to provide students with the best possible service and the most up-to-date and supportive information in an efficient and expeditious manner.
          </p>
        </div>

        {/* --- Policy Points --- */}
        <div className="space-y-6 text-sm">
          
          {/* 1. Academic Standards */}
          <section>
            <h3 className="font-bold text-gray-900 mb-1">
              1. Academic Standards:
            </h3>
            <p className="text-justify leading-relaxed">
              In keeping with its mission and goals, the University strives to ensure high academic standards by implementing well-designed curriculum carefully selecting high quality students and faculty utilizing modern and effective instructional methods and aids and by continuously monitoring and rigorously evaluating all the pertinent activities and systems. Khwaja Yunus Ali University has built up resources and facilities to ensure high academic standards.
            </p>
          </section>

          {/* 2. Graduation/Degree Requirements */}
          <section>
            <h3 className="font-bold text-gray-900 mb-1">
              2. Graduation/Degree Requirements:
            </h3>
            <p className="text-justify leading-relaxed">
              In Khwaja Yunus Ali University all undergraduate degrees are for about four year duration.A student must complete the required credit hours of his/her respective program, which is preset and declared for each Program. Although the passing grade point in a course of every program with major/concentration as per Khwaja Yunus Ali University grading system is Draft Copy 2.00 on the scale of 4.00, a student must acquire a minimum CGPA of 2.50 or higher to obtain the Degree.
            </p>
          </section>

          {/* 3. Evaluation Procedures */}
          <section>
            <h3 className="font-bold text-gray-900 mb-1 inline-block px-1 -ml-1">
              3. Evaluation Procedures:
            </h3>
            <p className="text-justify leading-relaxed mt-1">
              The performance of the students will be evaluated throughout the semester by attendance, class tests, assignments, presentation and Mid-term examinations. End of semester evaluation includes comprehensive Final examinations, project reports, viva, practical etc. Numerical scores earned by a student in various examinations, assignments etc. are cumulated and converted to letter grades at the end of the semester.
            </p>
          </section>

          {/* 4. Formation of Examination Committee */}
          <section>
            <h3 className="font-bold text-gray-900 mb-1">
              4. Formation of Examination Committee: :
            </h3>
            <p className="text-justify leading-relaxed mb-2">
              There shall be an Examination Committees for Midterm and Final examinations. The Examination Committee shall consist of (3) Three or (5) Five members. One Head and other members from among the teachers of the Department, One of the members may be taken from outside the Department. The Examination Committee shall
            </p>
            <ul className="list-none space-y-1 ml-1">
              <li>(i) Propose the names of the question setters and script/thesis/dissertation examiners from the previously approved panel of examiners</li>
              <li>(ii) Moderate examination questions</li>
              <li>(iii) Propose examination schedule approved by the examination committee to conduct the examinations properly</li>
              <li>Finalize the Grade Sheet</li>
              <li>(i) The Examination committee shall make necessary arrangement for holding viva and practical Examinations.</li>
            </ul>
          </section>

          {/* 5. Grading System */}
          <section>
            <h3 className="font-bold text-gray-900 mb-1">
              5. Grading System:
            </h3>
            <p className="text-justify leading-relaxed">
              The performance of a student in a given course is made through continuous evaluation that comprises class participation, attendance, assignment, class test, mid-term and final examinations. Letter Grade (LG) and Grade Point (GP) are used to evaluate the performance of a student in a given course. A+, A, A-, B+, B, B-, C+, C and D are the passing grades while 'F' is the failing grade. Grade 'I' is incomplete and grade 'W' is for withdraw.
            </p>
          </section>

        </div>
      </div>
    </div>
		</>
	);
}
