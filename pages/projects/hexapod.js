import Nav from '@/components/Header/Nav.js'

export default function Hexapod() {
    return(
        <>
        <Nav></Nav>
        <main className="flex flex-col">
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
        <h1 className="relative">First Post</h1>
        </main>
        </>
        
    )
}