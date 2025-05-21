import { CONTACT } from "../constants"


const Contact = () => {
    return (
        <div id="contact" className="scroll-mt-32 border-b border-neutral-900 pb-20">
            <h2 className="mt-10 text-center text-4xl font-montserrat">
                SCHEDULE A CONSULTATION TODAY
            </h2>
            <p className="text-center text-2xl font-montserrat text-gray-600 m-1">
                Send us a message!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-bold mb-2">Dr. Hipolito</h3>
                    <p className="text-sm text-gray-600">
                    Content for the first column goes here.
                    </p>
                </div>
                
                <div>
                    <h3 className="font-bold mb-2">Dr. Raymundo</h3>
                    <p className="text-sm text-gray-600">
                    Content for the second column goes here.
                    </p>
                </div>
                
                <div>
                    <h3 className="font-bold mb-2">Dr. Cortez</h3>
                    <p className="text-sm text-gray-600">
                    Content for the third column goes here.
                    </p>
                </div>
            </div>

        
          {/*div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b">{CONTACT.email}</a>
            </div>
            */}

        </div>
    )
}

export default Contact
