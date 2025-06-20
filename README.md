# Fixations Website — Stanford "Stories Everywhere" Final Project

Fired this up for my creative writing class taught by the Pulitzer-Prize-winning Adam Johnson. Lots of LLMs. Check it out here! https://fixaitions.com/

<img width="1256" alt="Screenshot 2025-06-19 at 10 40 48 PM" src="https://github.com/user-attachments/assets/716d6dcb-8674-46e6-a383-513d5b20e68a" />

## **Our Mission (as described on website — written for a non-technical audience)**

Dearest User,


Hi! And welcome to Fix-AI-tions. This is Harsh, Linden, and Sophia---three current Stanford students and the creators who brought the interesting obsessions of Stanford back to life through interactive chatbot embodiments. We're so excited that you are joining us on this adventure!


Fix-AI-tions was born from an Introductory Seminar ("Intro Sem") called ENGLISH 14N: Stories Everywhere, an interview-based storytelling class. Interviews are inherently human-centered, so our quarter was spent engaging with the most interesting stories people had to share---from first kisses and ways to accidentally kill pet hamsters to the mysterious traveling Arroyo crow figure and a worldwide fashion designer. Throughout the class, we engaged with questions of what it means to be human. So, when it came time for our final project, we continued to be intrigued by defining qualities of humanity. In the age of AI, especially, what sets us apart? How do we live alongside robots without losing parts of ourselves?


When we began this project, we were hit with immediate inspiration for the mode. A website where conversing with an AI-imagined being is made possible--- it was an aspiration we all wanted to bring to life.


The ideas for design came easily. Harnessing both our left and right brains, we set out to develop a website that incorporated both science and art.


Building upon the technical side, we devised a home page, showcasing a gallery of eight topics for the user to click on, which would then lead to a page where the interviewee could be "chatted" with. The catch was, this was not the interviewee themself, but AI's embodiment of that person. We planned to feed an LLM our verbatim transcripts, hoping it would internalize them, learn from them, and hypothetically, with a little instruction from our code, become capable of speaking like each person, with all their idiosyncratic tendencies and unique personal knowledge.


The technical core of our project leverages a serverless architecture on Vercel that routes API requests to OpenAI's GPT-3.5-turbo model. We implemented a prompt engineering system that processes verbatim interview transcripts to generate unique personality models, complete with speech patterns, verbal tics, and stylistic quirks. Each character's linguistic fingerprint is created by feeding the AI detailed instructions to mimic human speech imperfections -- including disfluencies, elongated words, and conversational patterns -- creating an uncannily authentic simulation of real human conversation that preserves each person's distinct voice while allowing for open-ended interaction. LLMs for art!


We drew intentionally minimalist sketches on Notability to populate the site's interface with a rough, yet authentic style. On each main page, we imagined hand-drawn pictures of the interviewee and the object/icon/thing (undecided at this point in the creative process) the chatbot would be set to have a conversation about.


In class, we read a magnificent work of graphic journalism authored by Dan Archer that became a point of great inspiration behind our decision making process. His work examining human trafficking in Nepal was mesmerizing not necessarily because of his writing, but because of his visually captivating stylistic choices--- simple line drawings with a quirky edge that expressed an interviewee's personality, yet shielded their total identity. We wanted our site to have the same effect. We wanted people to see a little of themselves in the people we interviewed.


Our vision was a long-lasting interactive experience. With these choices, we had ambitions to pit two opposing interpretations of the human experience against each other: cold hard data analysis and abstract artistic expression. In the end, we wished to raise questions---not answer them. But what questions, exactly, required more mulling over, workshopping, and thinking.


As mentioned above, the AI could theoretically embody another being. But what does that mean? What does it mean to be human anyway? What makes us unique, and will AI ever be able to achieve it? It was a challenge for us to narrow down what questions we seeked to ask through our project.


Our planning document was a fragmented mess as we attempted to pin down our interview topic. It riddled off ideas like:


1. AI + emotions?


2. How do people live alongside AI?


3. Very meta


4. Simplistic, impactful


Spurred by our intent to ask the deep questions about AI--- can it effectively convey the human emotive experience?--- we initially ventured to conduct interviews investigating creatives' feelings about AI and their practice. But, after first-draft critiques from our classmates and professors in Stories Everywhere, we soon realized this topic was just not cutting it.


"There's more work to be done here..."


"It's too much AI."


"You're asking AI to talk about AI?"


These reactions were not exactly what we wanted to hear. So, back to the drawing board we trudged. AI and emotion, we thought. We needed a provoking, heart-string-tugging, intellectually-stimulating question to pose to our interviewees. We looked around us. At our sprawling campus; at the people we saw every day. We thought, "What makes us human?"


The answer hit us like a bright blue afternoon sky---stark and obvious, always there... obsession. The most human thing we could think of. Obsession combines the most extreme facets of emotion--- overwhelming joy while fixating on one singular idea, and rage at the thought of expending thoughts elsewhere.


"Everyone at Stanford had a weird fixation," said Sophia at one of our rag-tag brainstorm sessions. And she was right. Linden had just come back from a weekend off campus, listening to her friend Tess list the 300-something Who Is... books she read through as a child. Harsh had spent numerous late nights hearing his dorm-mate excitedly analyze murder mysteries. And, the whole Stories Everywhere class learned about Adam's deep, deep loyalty to La Croix. Everyone really did have a weird fixation!


And so we began. We each interviewed three people, amounting to nine total, sourcing stories from Stanford friends about their childhood obsessions. In the spirit of the class and stemming from the idea that everyone at Stanford is included in our little theory, we also poked at our two lovely professors, Adam and Georgina, to tell us about their weird fixations.


After giving a little bit of context and getting our interviewees excited about our project, many of our initial interviews immediately (and bluntly) started with---"Tell me about a weird fixation or obsession you've had." While that sometimes led us to fun stories, like Barbies coming alive in the night to either burn the house down or bake cookies, we often found that we needed a way to dig deeper. So, in later interviews, we started with broader, more basic questions about the interviewee.


"Tell me your name, age, occupation, and where you're from."


"Tell me more about you as a child."


These questions usually led to fun, nostalgic anecdotes---fantasizing about being a self-sustaining orphan child in the Moor, going over to a friend's house to tell the parents---not the friend---about the current biography being read, and squabbling with siblings and cousins over the colors to dye the wool of SheepLand citizens. This slight change in the way we interviewed not only made each one glow brighter and the stories we captured more true to the interviewee, but it also helped us realize how necessary it is to ask those leading questions.


Eventually, we chose the best eight transcripts to build our project upon. "Best," meaning lengthiest, most emotive, most unique, and most engaging. We wanted to feed the AI layered stories with distinct diction, so that it might build the strongest foundation for conversation on our site.


We came out of the interview stage with a plethora of sound bites droning on and on about the nichest of topics. A grandfather's old gun cabinet, the English Moor, Minecraft SheepLand, and garages, to name a few. Upon listening to the voice memo recordings of our interviewees and their passions, we stumbled across the occasional snippet that shone bright with star-power. A crossword fanatic sarcastically joking they took lines of cocaine and adderall to maximize their performance, or a biography lover reflecting on childhood concerns of legacy and impermanence. These revealing quotes deserved to be read by the users on our site, and we amended our design to include a short bio alongside each highlighted person, consisting of a verbatim interview segment with (what we dubbed) the most intriguing thing they said. We wanted the project to include some concrete element of the interview, and we figured this was the most effective way. This new and final design showcases the interviewee's exact tone and their passion for their fixation, all the while drawing in the user. Areas for further questioning are posed, and therefore conversation with the AI counterpart is easier to begin.


We ultimately reached a point where we had the bare bones of our site laid out, we secured our interviews, and we nailed our purpose down to a tee, but we were still left fighting small functionality and stylistic errors with our website. Upon first inception of one of our interviewee's bios, the AI hallucinated an entirely fictional story, which we found quite ironic!


We also wanted to ensure we were giving the user the opportunity to experience the site on their own, and generate their own personal opinions about our project. Again, we wanted to only inspire questions about AI, not assert our own notions. We had to find the perfect balance between instruction and silence--- where to leave things blank, and where to command action.


Ultimately, we landed on the most hands off approach possible. This project is not about us handing you our dissertation on the relationship between humanity and artificial intelligence. What this project means... is for you to find out.


Sincerely,


Harsh, Linden, and Sophia

