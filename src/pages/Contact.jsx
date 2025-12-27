import PageHeader from "../components/common/PageHeader";


const Contact = () => {
	return (
		<div>
			<PageHeader title="Contact Us" />
			<div className="max-w-7xl flex justify-center mt-8 mb-8">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5997.812389892659!2d89.702511!3d24.224868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde0a679b36229%3A0x6e7b507ebb0f163e!2z4KaW4Ka-4Kac4Ka-IOCmh-CmieCmqOCngeCmuCDgpobgprLgp4Ag4Kas4Ka_4Ka24KeN4Kas4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kav4Ka8!5e1!3m2!1sbn!2sbd!4v1766852780621!5m2!1sbn!2sbd"
					width="100%"
					height="450"
					style={{ border: 0, borderRadius: '12px', minHeight: '350px', maxWidth: '900px' }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Google Map Location"
				></iframe>
			</div>
		</div>
	);
};

export default Contact;