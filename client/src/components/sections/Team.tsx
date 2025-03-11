
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  
  return (
    <section id="team" className="team-section">
      <motion.h2 
        className="section-title"
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
            title: "Director",
            image: "https://via.placeholder.com/120",
            bio: "Hajiya Mama is an experienced director with extensive expertise in leadership and strategic planning."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Director",
            image: "https://via.placeholder.com/120",
            bio: "Ahmad Muhammad Kabir brings valuable insights and direction to the company's strategic initiatives."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Director",
            image: "https://via.placeholder.com/120",
            bio: "Kabir Muhammad Kabir is dedicated to fostering growth and innovation within the organization."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Director, Services Operations",
            image: "https://via.placeholder.com/120",
            bio: "Muhammad Abdallah Dayyan oversees service operations, ensuring excellence in service delivery across all projects."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        >
          <img src="https://via.placeholder.com/120" alt="Muhammad Abdallah Dayyan" />
          <h4>Muhammad Abdallah Dayyan</h4>
          <p>Director, Services Operations</p>
        </motion.div>
      </div>

      <motion.h2 
        className="section-title"
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
            title: "Head of Dispatch",
            image: "https://via.placeholder.com/120",
            bio: "Hafsat Kabir manages the dispatch operations with efficiency and attention to detail."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Finance Officer",
            image: "https://via.placeholder.com/120",
            bio: "Hassana Kabir oversees financial operations, ensuring fiscal responsibility and accurate financial reporting."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Marketing / IT",
            image: "https://via.placeholder.com/120",
            bio: "Abubakar Aliyu Gambo leads marketing initiatives and IT infrastructure development, driving digital transformation."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Executive Assistant / HR",
            image: "/images/Muhammad Abdulkadir.jpg",
            bio: "Muhammad Abdulkadir handles executive assistance and human resources with professionalism and dedication."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Accountant / Special Assistant",
            image: "https://via.placeholder.com/120",
            bio: "Ahmad Usman manages financial accounting and provides specialized assistance to executive leadership."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Project Manager / Dispatch Officer",
            image: "https://via.placeholder.com/120",
            bio: "Ilyasu Muhammad coordinates project execution and dispatch operations, ensuring efficient resource allocation."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Store Keeper / Procurement",
            image: "https://via.placeholder.com/120",
            bio: "Usman Hassan manages inventory and procurement processes with precision and care."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Designer",
            image: "https://via.placeholder.com/120",
            bio: "Architect Suleiman Abba brings creative design solutions and architectural expertise to every project."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Project Manager / Production Manager",
            image: "https://via.placeholder.com/120",
            bio: "Muhammad Mu'awiyya oversees project execution and production processes, ensuring quality and timely delivery."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
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
            title: "Kenya Operations",
            image: "https://via.placeholder.com/120",
            bio: "Mrs. Fadila Sambo leads the company's operations in Kenya, driving expansion and client relationships in East Africa."
          })}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        >
          <img src="https://via.placeholder.com/120" alt="Mrs. Fadila Sambo" />
          <h4>Mrs. Fadila Sambo</h4>
          <p>Kenya Operations</p>
        </motion.div>
      </div>

      {/* Profile Modal */}
      <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
        {selectedMember && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">{selectedMember.name}</DialogTitle>
              <DialogDescription className="text-center text-md">{selectedMember.title}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground">{selectedMember.bio}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
