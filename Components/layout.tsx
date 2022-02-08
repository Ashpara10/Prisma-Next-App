import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
    return <div>
        <Navbar />
        <main className='mt-[70px]'>{children}</main>
    </div>;
}
export default Layout
