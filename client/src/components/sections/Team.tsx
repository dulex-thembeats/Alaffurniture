
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
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Board Of Directors
      </motion.h2>
      <div className="team-grid">
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => setSelectedMember({
            name: "Hajiya Mama",
            role: "Director",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Hajiya Mama")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Hajiya Mama" />
          <h4>Hajiya Mama</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setSelectedMember({
            name: "Ahmad Muhammad Kabir",
            role: "Director",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Ahmad Muhammad Kabir")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Ahmad Muhammad Kabir" />
          <h4>Ahmad Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setSelectedMember({
            name: "Kabir Muhammad Kabir",
            role: "Director",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Kabir Muhammad Kabir")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Kabir Muhammad Kabir" />
          <h4>Kabir Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setSelectedMember({
            name: "Muhammad Abdallah Dayyan",
            role: "Director, Services Operations",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Muhammad Abdallah Dayyan")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Muhammad Abdallah Dayyan" />
          <h4>Muhammad Abdallah Dayyan</h4>
          <p>Director, Services Operations</p>
        </motion.div>
      </div>

      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Management Staffs
      </motion.h2>
      <div className="team-grid">
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => setSelectedMember({
            name: "Hafsat Kabir",
            role: "Head of Dispatch",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Hafsat Kabir")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Hafsat Kabir" />
          <h4>Hafsat Kabir</h4>
          <p>Head of Dispatch</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setSelectedMember({
            name: "Hassana Kabir",
            role: "Finance Officer",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Hassana Kabir")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Hassana Kabir" />
          <h4>Hassana Kabir</h4>
          <p>Finance Officer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setSelectedMember({
            name: "Abubakar Aliyu Gambo",
            role: "Marketing / IT",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Abubakar Aliyu Gambo")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Abubakar Aliyu Gambo" />
          <h4>Abubakar Aliyu Gambo</h4>
          <p>Marketing / IT</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setSelectedMember({
            name: "Muhammad Abdulkadir",
            role: "Executive Assistant / HR",
            image: "/images/Muhammad Abdulkadir.jpg",
            bio: getMemberBio("Muhammad Abdulkadir")
          })}
        >
          <img src="/images/Muhammad Abdulkadir.jpg" alt="Muhammad Abdulkadir" />
          <h4>Muhammad Abdulkadir</h4>
          <p>Executive Assistant / HR</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => setSelectedMember({
            name: "Ahmad Usman",
            role: "Accountant / Special Assistant",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Ahmad Usman")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Ahmad Usman" />
          <h4>Ahmad Usman</h4>
          <p>Accountant / Special Assistant</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={() => setSelectedMember({
            name: "Ilyasu Muhammad",
            role: "Project Manager / Dispatch Officer",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Ilyasu Muhammad")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Ilyasu Muhammad" />
          <h4>Ilyasu Muhammad</h4>
          <p>Project Manager / Dispatch Officer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={() => setSelectedMember({
            name: "Usman Hassan",
            role: "Store Keeper / Procurement",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Usman Hassan")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Usman Hassan" />
          <h4>Usman Hassan</h4>
          <p>Store Keeper / Procurement</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => setSelectedMember({
            name: "Arch. Suleiman Abba",
            role: "Designer",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Arch. Suleiman Abba")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Arch. Suleiman Abba" />
          <h4>Arch. Suleiman Abba</h4>
          <p>Designer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={() => setSelectedMember({
            name: "Muhammad Mu'awiyya",
            role: "Project Manager / Production Manager",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Muhammad Mu'awiyya")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Muhammad Mu'awiyya" />
          <h4>Muhammad Mu'awiyya</h4>
          <p>Project Manager / Production Manager</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          onClick={() => setSelectedMember({
            name: "Mrs. Fadila Sambo",
            role: "Kenya Operations",
            image: "https://via.placeholder.com/120",
            bio: getMemberBio("Mrs. Fadila Sambo")
          })}
        >
          <img src="https://via.placeholder.com/120" alt="Mrs. Fadila Sambo" />
          <h4>Mrs. Fadila Sambo</h4>
          <p>Kenya Operations</p>
        </motion.div>
      </div>

      {/* Profile Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        {selectedMember && (
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{selectedMember.name}</DialogTitle>
              <DialogDescription className="text-lg font-medium">{selectedMember.role}</DialogDescription>
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
