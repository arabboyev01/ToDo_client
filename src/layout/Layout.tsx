import { ReactNode } from "react"
import Navigation from "../components/Navigation/Navigation"
import { StyledContent, StyleLayout } from "./style.layout"

type LayoutProps = { children: ReactNode }

export default function Layout({ children }: LayoutProps) {
    return(
        <StyleLayout>
            <Navigation />
            <StyledContent>
                {children}
            </StyledContent>
        </StyleLayout>
    )
}