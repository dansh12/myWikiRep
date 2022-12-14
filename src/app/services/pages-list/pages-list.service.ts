import { Injectable } from '@angular/core';
import { Page } from '../../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class PagesListService {
  // the basic three pages of the project
  private pages: Page[] =[{
    title: "Main Page",
    body: "This is the main page, you can use this page to navigate to the ather pages"
  }, {
    title: "Add a Page",
    body:''
  }, {
    title: "Albert Einstein",
    body: "Albert Einstein was a German-born theoretical physicist,[7] widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.[3][8] His massenergy equivalence formula E = mc2, which arises from relativity theory, has been dubbed 's most famous equation. His work is also known for its influence on the philosophy of science.[10][11] He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect,[12] a pivotal step in the development of quantum theory. His intellectual achievements and originality resulted in \"Einstein\" becoming synonymous with \"genius\".[13]In 1905, a year sometimes described as his annus mirabilis ('miracle year'), Einstein published four groundbreaking papers.[14] These outlined the theory of the photoelectric effect, explained Brownian motion, introduced special relativity, and demonstrated mass-energy equivalence. Einstein thought that the laws of classical mechanics could no longer be reconciled with those of the electromagnetic field, which led him to develop his special theory of relativity. He then extended the theory to gravitational fields; he published a paper on general relativity in 1916, introducing his theory of gravitation. In 1917, he applied the general theory of relativity to model the structure of the universe.[15][16] He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light and the quantum theory of radiation, which laid the foundation of the photon theory of light. However, for much of the later part of his career, he worked on two ultimately unsuccessful endeavors. First, despite his great contributions to quantum mechanics, he opposed what it evolved into, objecting that nature \"does not play dice\".[17] Second, he attempted to devise a unified field theory by generalizing his geometric theory of gravitation to include electromagnetism. As a result, he became increasingly isolated from the mainstream of modern physics.Einstein was born in the German Empire, but moved to Switzerland in 1895, forsaking his German citizenship (as a subject of the Kingdom of W??rttemberg)[note 1] the following year. In 1897, at the age of 17, he enrolled in the mathematics and physics teaching diploma program at the Swiss Federal polytechnic school in Z??rich, graduating in 1900. In 1901, he acquired Swiss citizenship, which he kept for the rest of his life, and in 1903 he secured a permanent position at the Swiss Patent Office in Bern. In 1905, he was awarded a PhD by the University of Zurich. In 1914, Einstein moved to Berlin in order to join the Prussian Academy of Sciences and the Humboldt University of Berlin. In 1917, Einstein became director of the Kaiser Wilhelm Institute for Physics; he also became a German citizen again, this time Prussian.In 1933, while Einstein was visiting the United States, Adolf Hitler came to power in Germany. Einstein, of Jewish origin, objected to the policies of the newly elected Nazi government;[18] he settled in the United States and became an American citizen in 1940.[19] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies but generally denounced the idea of nuclear weapons."
  }];
  constructor() { }
  //adding an article to the pages list
  addAnArticle(article: Page){
    this.pages.push(article);
    console.log(this.pages);
  }
  //getting the pages list
  getPages(){
    return this.pages;
  }
}
