const { NextResponse } = require("next/server");

export const  GET = async () => {
    const users = [
        {id: 1, name: "Harsh"},
        {id: 2, name: "John"},
    ];

    return NextResponse.json(users);
}
