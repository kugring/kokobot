import { RouteObject } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Table from "../views/demo/Table"
import Calandar from "../views/demo/Calandar"
import Chart from "../views/demo/Chart"
import Test from "../views/Test"
import Status from "../views/breeding/Status"
import Vaccine from "../views/breeding/Vaccine"
import Analysis from "views/production/Analysis"
// // 인증 관련 라우트
// const authRoutes: RouteObject[] = [
//   {
//     path: '/auth',
//     children: [
//       { path: 'sign-up', element: <SignUp /> },
//       { path: 'sign-in', element: <SignIn /> },
//       { path: 'oauth-response/:token/:expirationTime', element: <OAuth /> },
//     ],
//   },
// ];

// Todo 라우트
const todoRoutes: RouteObject[] = [
    {
        path: "/calandar",
        children: [{ path: "", element: <Calandar /> }],
    },
]

// Table 라우트
const tableRoutes: RouteObject[] = [
    {
        path: "/table",
        children: [{ path: "", element: <Table /> }],
    },
]

// Chart 라우트
const chartRoutes: RouteObject[] = [
    {
        path: "/chart",
        children: [{ path: "", element: <Chart /> }],
    },
]

        // Test 라우트
const testRoutes: RouteObject[] = [
    {
        path: "/test",
        children: [{ path: "", element: <Test /> }],
    },
]

// GaugeChart 라우트
const gaugeChartRoutes: RouteObject[] = [
    {
        path: "/calandar",
        children: [{ path: "", element: <Calandar /> }],
    },
]

// Breeding 라우트
const   breedingRoutes: RouteObject[] = [
    {   
            path: "/breeding",
        children: [
            { path: "status", element: <Status /> },
            { path: "vaccine", element: <Vaccine /> },
        ]
    },
]

// Production 라우트
const   productionRoutes: RouteObject[] = [
    {   
        path: "/production",
        children: [
            { path: "analysis", element: <Analysis /> },
        ]
    },
]

// 메인 라우트 구조
export const mainRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/test" replace />,
    },
    {
        element: "",
        children: [
            ...todoRoutes, 
            ...testRoutes, 
            ...tableRoutes, 
            ...chartRoutes, 
            ...breedingRoutes,
            ...productionRoutes,
            ...gaugeChartRoutes, 
        ],
    },
]
