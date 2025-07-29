import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <p className="text-center text-xl mb-12">
        Hi, I&apos;m <span className="font-['Monsieur'] text-xl">M</span>aksim <span className="font-['Monsieur'] text-2xl">B</span>lyznyuk. I love building. Interested in AI, ML, and design. 
      </p>

      <p className="text-center text-xl mb-4">
        Contact:
      </p>
      <p className="text-center text-xl mb-12">
        <a href="https://x.com/b1yzm" className="underline" target="_blank" rel="noopener noreferrer">Twitter</a>
        <span className="mx-8"></span>
        <a href="mailto:maksim.blyznyuk@rutgers.edu" className="underline">maksim.blyznyuk@rutgers.edu</a>
        <span className="mx-8"></span>
        <a href="https://github.com/maksblyz" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <ProjectCard
        title="Glossa"
        description="I've been thinking about how we can use AI to genuinely enhance the human experience 
        rather than replace it. Reading research papers, whenever I had a question, the process was 
        tedious: copying, pasting, screenshotting, switching tabs to ChatGPT, and providing context, all 
        just to ask one question. As someone naturally curious, this friction was frustrating. 
        So I built this tool to create a seamless, intuitive experience for engaging with research papers. 
        It's not an AI summarizer, it’s designed to support deeper reading, not replace it"
        video="/vids/glossa_1.mp4"
        github="https://github.com/maksblyz/glossa"
      />
      
      <ProjectCard
        title="Memento"
        description="Active recall and essay writing are considered to be some of the 
        most effective ways to deeply learn anything, and studies back this up. But 
        most existing tools suck at making this easy, especially when learning from 
        videos. Memento lets you watch any YouTube video, jot down what you remember, and 
        and instantly get AI-driven feedback on your recall. It forces you to actively 
        engage with the material, a pretty effective antidote to passive watching."
        video="/vids/memento.mp4"
        github="https://github.com/maksblyz/memento"
      />

      <ProjectCard
        title="Reeve"
        description="This is my take on the infamous to-do list project. You can only add a maximum of 3 tasks,
        and once you lock them in, you have 12 hours to complete them or money is lost. It's made to help
        you cut out the noise, focus on the signal, and get things done. Simple, but effective."
        video="/vids/reeve.mp4"
        github="https://github.com/maksblyz/reeve"
        live="https://itsreeve.com"
      />
    </>
  );
}