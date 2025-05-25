import { Image } from "@heroui/react";


export default function About() {
    return (
        <div className="flex flex-row items-center justify-center w-full h-screen gap-7">
            <div className="flex flex-col w-1/3 m-4 items-center justify-center">
                <Image
                    src="/images/profile1.png"
                    alt="Profile Picture"
                    width={200}
                    height={300}
                    className="rounded-full shadow-lg"
                />
            </div>
            <div className="flex flex-col w-2/3  mb-3 g-4">
                <div className="text-2xl font-bold">About ME</div>
                <div>
                    <p className="mt-2 text-gray-600 text-lg">
                        I am a passionate B.Tech graduate in Electronics and Communication Engineering with a specialization in IoT from Netaji Subhas University of Technology. I have hands-on experience in developing software solutions, automating workflows and creating innovative web applications.
                    </p>
                </div>
                <div className="text-xl">Education Background</div>

            </div>
        </div>
    );
}