import React from "react";

export interface TerminalRef {
    /** Write a message to the terminal. */
    log(message: string): void;

    /** Clear the terminal. */
    clear(): void;
}

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {}
