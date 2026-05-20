import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users,
  MapPinned,
  Megaphone,
  ScrollText,
  Image as ImageIcon,
  Newspaper,
} from "lucide-react";

export default function CJPUP() {
  const manifesto = [
    "Voice of Gen Z",
    "Youth ki awaaz",
    "Har kone ki awaaz",
    "Meme activism",
    "Rozgar, bijli, sadak issues",
    "Satire-driven awareness",
  ];

  const memes = [
    "UP Chapter Launch",
    "Poster Campaign",
    "Public Voices",
    "Gen Z Movement",
    "District Updates",
    "Youth Reels",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-red-100 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10"
        >
          <h1 className="text-5xl font-bold">
            🪳 Cockroach Janta Party — Uttar Pradesh
          </h1>
          <p className="text-xl mt-4">
            Official State Chapter • Voice of Gen Z • Youth of Uttar Pradesh
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <ScrollText />
              <h2 className="text-3xl font-semibold mt-2">Manifesto</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                {manifesto.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <Users />
              <h2 className="text-3xl font-semibold mt-2">Membership</h2>
              <p className="mt-2">
                Join the youth-led satirical movement of Uttar Pradesh.
              </p>
              <Button className="mt-4 rounded-2xl">Join Now</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <MapPinned />
              <h3 className="text-2xl mt-2">Coverage</h3>
              <p>Meerut to Gorakhpur — every district.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <Megaphone />
              <h3 className="text-2xl mt-2">Campaigns</h3>
              <p>Viral posters, reels & memes.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <Newspaper />
              <h3 className="text-2xl mt-2">Updates</h3>
              <p>Daily digital movement updates.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl shadow-xl mb-8">
          <CardContent className="p-8">
            <ImageIcon />
            <h2 className="text-3xl font-semibold mt-2">Meme Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {memes.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow text-center"
                >
                  {m}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-xl mb-8">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold">Founding Statement</h2>
            <p className="text-lg mt-3">
              Built by Gen Z. Powered by youth. Voice of Uttar Pradesh.
              A satirical digital movement raising public issues through memes,
              reels and online campaigns.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold">Leader Board</h2>
              <p className="mt-3">
                State coordinators, district representatives, youth volunteers.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold">Donation Meter</h2>
              <p className="mt-3">Symbolic support counter</p>
              <div className="mt-4 bg-gray-300 rounded-full h-4">
                <div className="bg-red-700 h-4 rounded-full w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl shadow-xl mb-8">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold">Join Form</h2>
            <div className="grid gap-4 mt-4">
              <input
                className="border p-3 rounded-2xl"
                placeholder="Name"
              />
              <input
                className="border p-3 rounded-2xl"
                placeholder="District"
              />
              <input
                className="border p-3 rounded-2xl"
                placeholder="Instagram"
              />
              <Button className="rounded-2xl">Submit</Button>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center py-10 text-sm">
          © Cockroach Janta Party Uttar Pradesh • Voice of Gen Z
        </footer>
      </div>
    </div>
  );
            }
