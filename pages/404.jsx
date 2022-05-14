
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

import MetaTags from "@/components/metatags.jsx";


export default function FourOFour() {
    return (
        <div className="flex justify-center items-center my-10">
            <MetaTags
                title="404 - Not Found"
                description="Not found. Please check your spelling."
            />
            <div>
                <p className="text-9xl font-extrabold border-b-4 border-indigo-500 text-center">
                    404
                </p>
                <p className="text-4xl font-bold text-gray-100 text-center mt-2">
                    Page not found
                </p>
                <Link href="/">
                    <a className="--btn --btn-3 --btn-primary w-full mt-2">
                        Go to the Homepage
                        <ArrowRightIcon className="w-6 h-6 ml-2" />
                    </a>
                </Link>
            </div>
        </div>
    )
}
