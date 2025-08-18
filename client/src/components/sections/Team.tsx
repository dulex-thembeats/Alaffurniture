import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Team member data structure
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Example bios - you can replace these with actual information
  const getMemberBio = (name: string) => {
    return `${name} is a valued member of our organization with extensive experience in their field. They have contributed significantly to our company's growth and success through their dedication and expertise.`;
  };

  return (
    <section id="team" className="team-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary">ALAF Leadership Team</h2>
      </motion.div>
      <div className="team-grid mb-16">
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() =>
            setSelectedMember({
              name: "Hajiya Mama",
              role: "Director",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Hajiya Mama"),
            })
          }
        >
          <img src="/images/Team/Hajiya mama.png" alt="Hajiya Mama" />
          <h4>Hajiya Mama</h4>
          <p>Director</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() =>
            setSelectedMember({
              name: "Ahmad Muhammad Kabir",
              role: "Director",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Ahmad Muhammad Kabir"),
            })
          }
        >
          <img src="/images/Team/Ahmad kabir.png" alt="Ahmad Muhammad Kabir" />
          <h4>Ahmad Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() =>
            setSelectedMember({
              name: "Kabir Muhammad Kabir",
              role: "Director",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Kabir Muhammad Kabir"),
            })
          }
        >
          <img
            src="/images/Team/Muhammad Kabir.png"
            alt="Kabir Muhammad Kabir"
          />
          <h4>Kabir Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() =>
            setSelectedMember({
              name: "Muhammad Abdallah Dayyan",
              role: "Director, Services Operations",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Muhammad Abdallah Dayyan"),
            })
          }
        >
          <img
            src="/images/Team/Muhammad Dayyan.png"
            alt="Muhammad Abdallah Dayyan"
          />
          <h4>Muhammad Abdallah Dayyan</h4>
          <p>Director, Services Operations</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Management Staffs</h2>
      </motion.div>
      <div className="team-grid">
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() =>
            setSelectedMember({
              name: "Hafsat Kabir",
              role: "Head of Dispatch",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Hafsat Kabir"),
            })
          }
        >
          <img src="/images/Team/Hafsah Kabir.png" alt="Hafsat Kabir" />
          <h4>Hafsat Kabir</h4>
          <p>Head of Dispatch</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() =>
            setSelectedMember({
              name: "Hassana Kabir",
              role: "Finance Officer",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Hassana Kabir"),
            })
          }
        >
          <img src="/images/Team/Hassana Kabir.png" alt="Hassana Kabir" />
          <h4>Hassana Kabir</h4>
          <p>Finance Officer</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={() =>
            setSelectedMember({
              name: "Muhammad Mu'awiyya",
              role: "Project Manager / Production Manager",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Muhammad Mu'awiyya"),
            })
          }
        >
          <img
            src="/images/Team/Muhammad Mu'awiyya.png"
            alt="Muhammad Mu'awiyya"
          />
          <h4>Muhammad Mu'awiyya</h4>
          <p>Project Manager / Production Manager</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() =>
            setSelectedMember({
              name: "Muhammad Abdulkadir",
              role: "Executive Assistant / HR",
              image: "/images/Muhammad Abdulkadir.jpg",
              bio: getMemberBio("Muhammad Abdulkadir"),
            })
          }
        >
          <img
            src="/images/Team/Muhammad Abdulkadir.jpg"
            alt="Muhammad Abdulkadir"
          />
          <h4>Muhammad Abdulkadir</h4>
          <p>Executive Assistant / HR</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() =>
            setSelectedMember({
              name: "Ahmad Usman",
              role: "Accountant / Special Assistant",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Ahmad Usman"),
            })
          }
        >
          <img src="/images/Team/Usman Ahmad.png" alt="Ahmad Usman" />
          <h4>Ahmad Usman</h4>
          <p>Accountant / Special Assistant</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() =>
            setSelectedMember({
              name: "Abubakar Aliyu Gambo",
              role: "Marketing / IT",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Abubakar Aliyu Gambo"),
            })
          }
        >
          <img
            src="/images/Team/Abubakar Gambo Aliyu.png"
            alt="Abubakar Aliyu Gambo"
          />
          <h4>Abubakar Aliyu Gambo</h4>
          <p>Marketing / IT</p>
        </motion.div>

        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={() =>
            setSelectedMember({
              name: "Aliyu Auwal",
              role: "Project Manager / Secretary",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Aliyu Auwal"),
            })
          }
        >
          <img src="/images/Team/Auwal Aliyu.jpeg" alt="Aliyu Auwal" />
          <h4>Aliyu Auwal</h4>
          <p>Project Manager / Secretary</p>
        </motion.div>
        {/* <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={() =>
            setSelectedMember({
              name: "Usman Hassan",
              role: "Store Keeper / Procurement",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Usman Hassan"),
            })
          }
        >
          <img src="/images/Muhammad Abdulkadir.jpg" alt="Usman Hassan" />
          <h4>Usman Hassan</h4>
          <p>Store Keeper / Procurement</p>
        </motion.div> */}
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() =>
            setSelectedMember({
              name: "Nwachukwu Obioma",
              role: "Designer",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Nwachukwu Obioma"),
            })
          }
        >
          <img
            src="/images/Team/Nwachukwu Obioma.jpeg"
            alt="Nwachukwu Obioma"
          />
          <h4>Nwachukwu Obioma</h4>
          <p>Factory Manager</p>
        </motion.div>

        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          onClick={() =>
            setSelectedMember({
              name: "Mrs. Fadila Sambo",
              role: "Kenya Operations",
              image: "https://via.placeholder.com/120",
              bio: getMemberBio("Mrs. Fadila Sambo"),
            })
          }
        >
          <img src="/images/Team/Fadila Sambo.jpeg" alt="Mrs. Fadila Sambo" />
          <h4>Mrs. Fadila Sambo</h4>
          <p>Kenya Operations</p>
        </motion.div>
      </div>

      {/* Profile Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={() => setSelectedMember(null)}
      >
        {selectedMember && (
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedMember.name}
              </DialogTitle>
              <DialogDescription className="text-lg font-medium">
                {selectedMember.role}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full border-4 border-primary shadow-lg mb-4"
              />
              <p className="text-muted-foreground text-center">
                {selectedMember.bio}
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
