interface DataSpeaker {
  content: string;
  role: string;
  start: number;
  end: number;
  position: (start: number) => void;
  letterSize: string;
}

const Transcribe = ({
  content,
  role,
  start,
  end,
  position,
  letterSize,
}: DataSpeaker) => {
  return (
    <div
      className={`flex mt-2 p-4  rounded-lg w-full cursor-pointer ${
        role === "A" ? "bg-slate-50" : "bg-slate-600"
      }`}
      onClick={() => position(start)}
    >
      <div>
        <h2
          className={`${
            role === "A" ? "text-black" : "text-slate-50"
          } ${letterSize}`}
        >
          {content}
        </h2>
        <div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-1">
              <div className="flex gap-5 mt-4">
                <div className="flex flex-row">
                  <p
                    className={`${
                      role === "A" ? "text-black" : "text-slate-50"
                    }`}
                  >
                    role:
                  </p>
                  <i
                    className={`${
                      role === "A" ? "text-black" : "text-slate-50"
                    }`}
                  >
                    {role === "A" ? "agent" : "user"}
                  </i>
                </div>
                <p
                  className={`${role === "A" ? "text-black" : "text-slate-50"}`}
                >
                  start: {start}
                </p>
                <p
                  className={`${role === "A" ? "text-black" : "text-slate-50"}`}
                >
                  end: {end}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcribe;
