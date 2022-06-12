import TopBarButton from "./TopbarButton"

const Topbar = () => {
    return (
        <div className="bg-gradient-to-b from-orange-400 to-red-700 h-20 w-full text-white
            flex flex-row items-center p-5 justify-start font-bold font-mono text-2xl">
            <p className="text-3xl">gabefgonc</p>

            <div className="flex flex-row-reverse justify-start w-full gap-5">
                <TopBarButton>About Me</TopBarButton>
                <TopBarButton>Projects</TopBarButton>
            </div>
        </div>
    )
}

export default Topbar