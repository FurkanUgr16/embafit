"use client"
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Instagram({href, children, className}){
    return(
        <Link className={className} href={href}>
            {children}
            <InstagramIcon />
        </Link>
    )
}