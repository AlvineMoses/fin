type ScheduleResultProps = {};

const ScheduleResult = ({}: ScheduleResultProps) => (
    <div className="">
        <div className="mb-3 font-bold">You are done!</div>
        <div className="mb-5">
            Your post has been scheduled for June 2nd, 2023 at 12:14 pm and
            will be shared through{" "}
            <a
                className="text-primary-1"
                href="https://buffer.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buffer
            </a>
            .
        </div>
        <button className="btn-dark btn-small">View on Buffer</button>
    </div>
);

export default ScheduleResult;
