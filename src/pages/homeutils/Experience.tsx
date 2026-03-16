import Animate from "../../utils/animations/Animate";
import { FaLocationDot } from "react-icons/fa6";

function Experience() {
  return (
    <div>
      <div className="px-4 flex flex-col justify-center items-center mt-[5vh] w-full">
        <Animate delay={300} type="slideLeft">
          <h2 className="text-4xl lg:text-[50px] font-semibold text-center">
            Professional Experience
          </h2>
        </Animate>

        {/* AI-Powered NLP Internship */}
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[70vw]">
          <Animate delay={300} type="slideLeft">
            <div className="relative bg-blue-700 py-5 w-full flex flex-col lg:flex-row lg:items-center rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">AI-Powered NLP Intern</div>
              <div className="font-this text-foreground/80 text-sm w-full flex">
                @ 
                <a
                  href="https://www.algotutor.io/"
                  target="_blank"
                  className="ml-1 text-primary underline"
                >
                  Algo Tutor Academy
                </a>
                <br className="lg:hidden" /> Jun 2025 – Aug 2025
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-white rounded-md flex flex-col gap-5">
              <div className="lg:max-w-[50vw] text-black">
                • Gained strong proficiency in NLP preprocessing including tokenization, stemming,
                lemmatization, stop-word removal, and text normalization for high-quality ML inputs. <br />
                • Implemented classical ML classifiers (Naive Bayes, SVM, Logistic Regression) and deep learning architectures (RNNs, LSTMs, Transformers); fine-tuned models like BERT and GPT for sentiment analysis, NER, and summarization tasks. <br />
                • Built end-to-end NLP applications including chatbots, QA systems, and summarizers, optimizing performance (precision, recall, F1-score) achieving up to 89% accuracy.
              </div>
              <div className="flex flex-wrap flex-grow justify-between gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Python</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">NLP</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">ML/DL</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">BERT/GPT</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Tokenization</div>
              </div>
            </div>
          </Animate>
        </div>

        {/* News Article Summarizer Project */}
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[70vw]">
          <Animate delay={500} type="slideLeft">
            <div className="relative bg-green-700 py-5 w-full flex flex-col lg:flex-row lg:items-center rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">News Article Summarizer</div>
            <div className="font-this text-foreground/80 text-sm w-full flex">
              @
              <a
                href="https://github.com/Potluri-Naga-Venkata-Sai/News-Article-Summarizer"
                target="_blank"
                className="ml-1 text-primary underline"
              >
                GitHub
              </a>
              <br className="lg:hidden" /> Aug 2025 – Sep 2025
            </div>
            </div>
          </Animate>

          <Animate delay={600} type="slideLeft">
            <div className="w-full px-6 py-3 bg-green-200 rounded-md flex flex-col gap-5">
              <div className="lg:max-w-[50vw] text-black">
                • Processed news data using BeautifulSoup and newspaper3k; applied text chunking and normalization, boosting summarization coherence by 35% and reducing parsing errors by 40%. <br />
                • Applied NLP models (Hugging Face BART, Transformers) for abstractive summarization, achieving 88% ROUGE/coherence accuracy. <br />
                • Built and deployed a Flask-based web app with intuitive HTML/CSS interface; full end-to-end ML pipeline with 92% user satisfaction.
              </div>
              <div className="flex flex-wrap flex-grow justify-between gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Python</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Flask</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Streamlit</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Web Scraping</div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">Hugging Face</div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Experience;