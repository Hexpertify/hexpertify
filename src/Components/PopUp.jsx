import Modal from "./Model";

function PopUp() {
    return (
        <Modal>
            <Modal.Window name="promise">
                <div className="max-w-lg sm:max-w-md mx-auto p-4 sm:p-6 bg-black rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-xl text-white font-semibold mb-4">Hexpertify Promise</h2>
                    <p className="text-white mb-4">
                        We are excited to introduce you to the MVP (Minimum Viable Product) version of Hexpertify. The MVP website includes only limited features as we explore the market & gather feedback from early users like you to understand your needs.
                    </p>
                    <p className="text-white mb-6">
                        We promise that once our platform is fully ready we will provide quick consultations at an affordable price.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Thanks for Understanding!
                    </p>
                    <div className="flex justify-end">
                        <Modal.Close>
                            <button
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                            >
                                Close
                            </button>
                        </Modal.Close>
                    </div>
                </div>
            </Modal.Window>

            {/* <Modal.Open opens="promise"> */}
            {/* <button
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                >
                    Open Example Modal
                </button> */}
            {/* </Modal.Open> */}
        </Modal>
    );
}

export default PopUp;
