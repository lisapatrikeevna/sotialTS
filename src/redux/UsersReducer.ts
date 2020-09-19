type UnfollowActionCreatorType = ReturnType<typeof unfollowActionCreator>
type FollowActionCreatorType = ReturnType<typeof followActionCreator>
type SetUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>
type UsersActionType = UnfollowActionCreatorType | FollowActionCreatorType | SetUsersActionCreatorType
export type usersInitialStateType = {
    users: Array<userItemType>
}
export type userItemType = {
    name: string
    id: number
    status: string
    followed: boolean
    photos: photoType
    uniqueUrlName: null

}
type  photoType = {
    small: string
    large: string
}
let initialState: usersInitialStateType = {
    users: [
        // {
        //     "name": "Diana",
        //     "id": 11500,
        //     "uniqueUrlName": null,
        //     "photos": {
        //         "small": '',
        //         "large": ''
        //     },
        //     "status": '',
        //     "followed": false
        // },
        // {
        //     id: 1,
        //     photoUrl: 'data:image/png;base64,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',
        //     name: "lisa",
        //     status: "some status",
        //     city: "Ukraine",
        //     country: "Kiev",
        //     followed: true
        // },
        // {
        //     id: 2,
        //     photoUrl: 'data:image/png;base64,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',
        //     name: "Dan",
        //     status: "some status",
        //     city: "Ukraine",
        //     country: "Kiev",
        //     followed: true
        // },
        // {
        //     id: 3,
        //     photoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABL1BMVEX///9lyP/+27P09PSx4v89T11lyf7/27La3tv/3K/+27Ws4//v3MX59vNfx/+h2Pv/4Ljkw6D/5LoAABEAAAAAABWNzfC95f32061ZyP///fqp3/8sOkNXxf8xRlXz+v2A0P3o9v1+cGH/4sX+7NjP6/2N1f3a8Py45P2vtblveX9HV2NRTEWIeWdeV03avJk5OjnR1di8wcWFj5bp6+wkPUwaLjhTYWsFIi9jcXqgpapzf4cRHSRuYFKciXMAEyBzc3RCRUn/+ejEqo5APzyrln4cIB8IHSQgKS3Y1ce5oYeYyuI0JRGpkXY8NCpJQTQ8QDFjQzy9SVfeTGH9T22yPE7zw6Sxzdq809zR3+Py5dSFjJBpu+jgz7xhZGaempaPiICwwch4ZE2aR0xEMyxRYiymAAAJiUlEQVR4nO2bC1fa2BaAQ4ATOIU0goEgICiigA8eKlQrUoWOaKfamXundmo7j975/7/h7pMHBJLIo3fdHLr2t9SlSWDtj/PY+5xEQUAQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEF+WILNVtWg1Qz6Hcz/ntbx/unppsXp6f5xy++QvpNgLdfO1c5P9D9OzsEuPAlYWmer+rWr1qzVVzmg3T5rCsHjzWk9U3LzOCg0z9ptdumrqt8hL8iTHjaLvLbv7qc77r9+ZV7Xfu13yAuyn8t1Op1wLuetZ0rmcuFOBy4P+x3ygkDgNeBshh/jjF0Hreh3yAuybxjuz2G4zy5cvTZ8rRvOI6grQhvW/A55Qc7bubNaZy7BcLhT6+Ta536HvCDNdq4zzyA0ONvPtZt+h7woMIvO10d1YKJZtYwPCXFWnrCz2X7yO+CFibxaQDAcfhXxO+DFcRmFo8rbeerM73CX4MxuBoV356z2dHzOOH6qnXXCk6YraHhyaumdbr4+b0bYOmJDCDKM85Hm+evN0ZLj9MTfcJegumm0Xq0KIyzoDozWas1oyc1VW1pAUQOBb3bOT4JxDz3L8uS8wy5dtaUFFKbh004r6NV6k7Q6p+F9vwNelOBmuDWfnt6QrfDmqmX8x6eTuf0YJ0+Pfoe8GLuPGwsJBoMbj7t+B70AW+TLooKg+IVs+R34vJRl+eWMGdSF+EtZLvsd+nyk82RJQ5JP+x38PGTzJLCkYYDks36HPxsQ/A7DFVCsZMh3GZJMxW+F54ExGACWNQQ4H4t7rIt+pyHJ7/mt4U2BEBdD/VQwEvn89evXWKlUisXgl88RY7nkYkhIwU+JZynqMU4ZVv9YX19PfqsnRFEaISb623B4/Y/qtCF7ddFvES+yMpk2FJrD5PDo8vDgQj1aU0QLZe1IvTg4vDwaJhtNYdqQyJxOqFvmILQb/pm86GoJRUlol8mLuiIqiUQCftYvkpfG4e5F8s+TaUOS57N+G/XRgFHTCCexvnrQpVSUlDUtUR/2NPFSTfbeKlpvWE9oa4okUto9UPuliGFofUCc9tN0PjAyJKl4sPrX+7thQ1ujIr1+07hq7dR73a56dHmgbm/36jutq8abawr9VWsM797/VQ3Gv4y6QCDAY8oo2OKDvJ36e11Vb3p9BSSEVuPqaiBcH970LhNK4rB3c3gtDK6uGi2Bwpjs925Udf3vIrG/Q4C/+XQ8zRj9TKn3+4MBGIgbuuGVIMTUQUISRdpIxgThSjfcgPN0MOj36zRjfzmPk02GTBimogoMt+2EKJXg5JvGoCUIGz8NIGWIicFPG4LQGjTewJkSJI7tnqYoUmrCkGR89nFQkScM5VRUpFryLSSIHXY6ouf9bkM3bHTZH0F9H38HuunbpEbFaEqeMJR5q08nGtBpaDBhaOBhyCT//xLPUc67GarbCar3UoOJXmpSkmhiW3UzzPO14N+VnYaictAwZhqT2PolK2uUy/WYdUifaRoHcNhhKHO1M1XIuPRS6H4qyxbUvOj6UK3rhnUVsoUBnFX66ls3Q5LhKWGYy8IJQxb8RUNToKJhPhss4yf0qjTRhYzPWvYaqhpFa1ywj8FpyFXW3yVThgE2DiGZqwMRwpdoqQRV242mUFhXUEW7gaqtVKJQtSniABpaZONw6h0I4amb5h2GmRjL7cpdb3gnmpX3sC5qBmJ9aFbe4t2wdwefgSjFMg7DvN9aY/ZkhyEpino/rTdUffV0ox5pSt1C0Y7UG331pDbqeh8Vi453IDI/i/2Ki6FcvJXYtELvuslksnfYT1BRMwU1kSb6hz043r2jbPKRbovTcxVfSX86V5gd9V2UBc+WhLAo1Je/VFtbW9Oovgg2j7OPIfpuuovqcJQvim7xQUeNipNQi6njUUcXNSj6LTbCPT5CxHlxdHLzHfwWsyjk3ePL6CNxjGTbiZo4fusYhAZ5XnL+noeh/M7eTSndGCHs2B2j72QPQ14m0+my2zIMkKh9xEnjVca1/TiNwpXuhrwU32nXqRSQm7amovTbzxbf7JON1PR8PS91m6dhoGgzVN7fP3z48EH/vn+v2Azdp+LVMMw0xyNRe3j45dd//fof+P7l4UEbj8KmazJcEUMij0yU/v3Dvy0e7vujRtQ8ppkVMSQpqxGhk97/85vu99s/9+NuGk15JMNVMcw8mooSK9jq9Y8fP9brrHSzBB8zK2DokS0MxoqiCyD4zGu5yRYeGd9sxpGiu6BnAwY4yvgeVZtpSDIp6tp+sPRPPdNFAxxVbR6V94gMuWXNOFHHsAa8Jc910QBHlbftvppnM+qbGnZBKTajAbm6x+a+ArYZwmCEhS/zktgXVHDa2mOGzDLkZwXssosxBRiyFAFQ9oP98ewsGuBsF8NlJ8rVcII5DHmZSgW33cRpw096xh+jSZ9mGvJ0g825IzwONMDOZT5FKaVG/2RdldIoMyReK8MAbzvCjl19e6BElmXD0NqKEg1DOP7MZMPXrr7jzowFuJHiO+BWsm+xwe/SLTtcJODpocjVnRlnvtCf/5LJ7st0qBQFnFWNxA6XQumXu0QOEGdjcpQrGI7iG/om2c2GgBcx95pNt4y9CIUqoSxIOgy5KbtNHHvymRSEPpdhiEmmnLv6fitNMZH0SSCT+hQymccQ+JTK2OZVrtK9yYQhTJ2RBQ0jMLlOGPot5MD2xJBMvkalhQ2l6FdiezKOvyeGCmTUgEVYDy5hCOvF8T02Hp+itZ7cA0FIeEsYspcVzVKOq2w/wlwlEn1Fv0wbslW/0YYcrQztsCdoYYYwtiyWMwRFVsjx+gQtm2xI5ta4G7OkIY3ewsKYw2nGBKpMdkONLm1I9TvepOi3iCcFQqxt0SXbkG2r8vzfCEJ5dCdmaUMx2uSsIJ3ksxXn8obSZ78lngcUnTONN46ZhnvBUSuODUO/R7z5PTTVhvwLWoqGYTY0D1lbPlwBQabI/omEGW7F9+YQ3ItvGYaUroagIMTNNizHg/H0TME0XFU22zDud+jzEqeSaRiszDSsBE1Dia6MIKT+mL4CLm+V5+ilxlWRaIzjRO/C58hMs0kiKzIExxTS802kBtn0ajWgwVZlXsdshdPV0kz2Qi9m68E1HN1jWpitmX01m17V9rMolJ/prNlKeRXHn4PCXtqlfsuG0ns/hJ5JYasMjWlRKZe3fiQ7BEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQRfgv82IyxpOhAFAAAAAASUVORK5CYII=',
        //     name: "Kat",
        //     status: "some status",
        //     city: "Ukraine",
        //     country: "Kiev",
        //     followed: false
        // }
    ]
}

const usersReducer = (state: usersInitialStateType = initialState, action: UsersActionType): usersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET-USERS' : {

            return {...state, users: action.users}
        }

        default  :
            return state;
    }

}


export const followActionCreator = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersActionCreator = (users: Array<userItemType>) => ({type: 'SET-USERS', users: users} as const)

export default usersReducer;