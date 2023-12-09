/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xGDWWcmYL9c
 */
import { CardHeader, CardContent, Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResponsiveBar } from "@nivo/bar"

export function Dashboard() {
  return (
    <div className="flex p-8">
      <div className="w-1/2 pr-4">
        <Card className="w-full h-auto bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="p-4 bg-gray-200">
            <h1 className="font-semibold text-lg">Customers List</h1>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-4">
              <li>
                <h2 className="text-lg font-semibold text-blue-600">John Doe</h2>
                <p className="text-sm text-gray-600">johndoe@example.com</p>
                <div className="mt-4">
                  <BarChart className="w-full h-[300px]" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-md">Recent Purchase</h3>
                  <p className="text-sm text-gray-600">Cadillac - Expressed interest in other GM cars</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/2 pl-4">
        <Card className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="p-4 bg-gray-200">
            <h1 className="font-semibold text-lg">Email Threads</h1>
          </CardHeader>
          <CardContent className="p-8">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-blue-600">John Doe</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We hope you're enjoying your new Cadillac. We thought you might like to explore some other GM vehicles
                that could enhance your driving experience.
              </p>
            </div>
            <div className="flex flex-wrap mt-8 space-y-4 md:space-y-0">
              <Link className="w-full md:w-1/2" href="#">
                <Card className="h-32 bg-blue-200">
                  <CardContent className="flex items-center justify-between">
                    <img
                      alt="Chevrolet Logo"
                      className="w-8 h-8 mr-2"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <CardTitle className="text-blue-600">Chevrolet</CardTitle>
                      <CardDescription>Experience the power and performance of Chevrolet.</CardDescription>
                    </div>
                    <PlaneIcon className="w-4 h-4 text-blue-600" />
                  </CardContent>
                </Card>
              </Link>
              <Link className="w-full md:w-1/2 md:ml-4" href="#">
                <Card className="h-32 bg-red-200">
                  <CardContent className="flex items-center justify-between">
                    <img
                      alt="GMC Logo"
                      className="w-8 h-8 mr-2"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <CardTitle className="text-red-600">GMC</CardTitle>
                      <CardDescription>Discover the versatility and ruggedness of GMC.</CardDescription>
                    </div>
                    <PlaneIcon className="w-4 h-4 text-red-600" />
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="mt-8">
              <Button className="w-full p-4 bg-blue-500 text-white" variant="outline">
                Explore More
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-100">
              If you have any questions, feel free to reply to this email or contact our support team.
            </p>
            <Button variant="link">Contact Support</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function BarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "A",
            data: 111,
          },
          {
            name: "B",
            data: 157,
          },
          {
            name: "C",
            data: 129,
          },
          {
            name: "D",
            data: 187,
          },
          {
            name: "E",
            data: 119,
          },
          {
            name: "F",
            data: 22,
          },
          {
            name: "G",
            data: 101,
          },
          {
            name: "H",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}
