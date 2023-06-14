import Link from "next/link";
import Icon from "@/components/Icon";

type FootProps = {};

const Foot = ({}: FootProps) => (
    <div className="">
        <div className="flex items-center mb-6 caption1 text-n-4/50">
            <Icon className="w-4 h-4 mr-2 fill-[#0C923C]" name="lock" />
            Secured form with Little Banking
        </div>
        <div className="text-right">
            <div className="h4">Billed now: Kes 3900</div>
            <button
                className="mb-4 base2 font-semibold text-primary-1 transition-colors hover:text-primary-1/90"
                type="button"
            >
                Apply promo code
            </button>
            <div className="max-w-[27rem] ml-auto mb-4 caption1 text-n-4/50 dark:text-n-4/75">
                By clicking &quot;Start littlegpt Enterprise plan&quot;, you
                agree to be charged Kes 3900 every month, unless you cancel.
            </div>
            {/* <button className="btn-blue" type="submit">
                Start littlegpt Enterprise plan
            </button> */}
            <Link href="/thanks" className="btn-blue md:w-full" type="submit">
                Start littlegpt Enterprise plan
            </Link>
        </div>
    </div>
);

export default Foot;
