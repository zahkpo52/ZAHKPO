import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type WhatsAppIconProps = {
    className?: string;
    href?: string;
    label?: string;
};

const WhatsAppIcon = ({
    className,
    label = "Chat on WhatsApp",
}: WhatsAppIconProps) => {
    return (
        <Link
            href={`https://wa.me/${siteConfig.contact.ukOffice.phoneHref.replace("+", "")}?text=Hi ZAH KPO, I would like to know more about your services.`}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className={cn(
                "group fixed bottom-5 left-5 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_22px_48px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "size-14 sm:size-16",
                className,
            )}
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-7 sm:size-8"
            >
                <path d="M20.52 3.48A11.83 11.83 0 0 0 12.14 0C5.53 0 .14 5.39.14 12c0 2.12.56 4.18 1.63 5.99L0 24l6.2-1.6A11.96 11.96 0 0 0 12.14 24c6.62 0 12-5.39 12-12 0-3.2-1.25-6.2-3.62-8.52ZM12.14 21.9c-1.97 0-3.9-.53-5.58-1.54l-.4-.24-3.68.95 1-3.56-.27-.39A9.93 9.93 0 0 1 2.16 12c0-5.48 4.47-9.96 9.98-9.96 2.67 0 5.17 1.04 7.06 2.92A9.9 9.9 0 0 1 22.12 12c0 5.48-4.47 9.9-9.98 9.9Zm5.42-7.45c-.3-.15-1.75-.87-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.75.96-.92 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.36 0 1.4 1.03 2.74 1.18 2.93.15.2 2.03 3.12 4.92 4.36.69.3 1.23.48 1.65.62.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.4-.08-.12-.27-.2-.57-.35Z" />
            </svg>
        </Link>
    );
};

export default WhatsAppIcon;