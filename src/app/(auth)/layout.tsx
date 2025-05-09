import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const style: React.CSSProperties = {
    '--dot-bg': '#161616',
    '--dot-color': '#848282',
    '--dot-size': '1px',
    '--dot-space': '50px',
    background: `
      linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
      linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
      var(--dot-color)
    `
  } as React.CSSProperties;

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={style}
    >
      {children}
    </div>
  );
}

export default Layout
