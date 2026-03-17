---
layout: page
title:  Federated Learning
description: Free-riding, market competition, collaboration formation, measuring data heterogeneity, personalization, multi-task learning, federated foundation models
img: assets/img/FL-architecture.png
importance: 1
category: work
related_publications: true
---


### **Table of Contents**  
1. [Cross-silo federated learning](#FL)  
2. [An overview of my research](#overview)
3. [Conflict resolution: Competition, free-riding, and collaboration](#part1)
4. [Quantifying benefit strength via multi-task learning](#part2) 
5. [Personalized federated learning](#part3) 
6. [Federated foundation models](#part4)



>### **1. Cross-silo Federated Learning (FL)**
<a id="FL"></a>  

In FL, a central server (CS) periodically gathers model updates from individual FL participants (i.e., clients), which are then aggregated to refne a global model. Similarly, each client regularly acquires the latest global model from the CS and further enhances it through local training. This iterative interplay between the CS and clients persists until the global model achieves convergence. 

There are two types of FL. In *cross-device FL*, clients are end-user devices such as smartphones or IoT devices, and CS is the final owner of the
trained model. In *cross-silo FL*, client are companies or organizations in private or public sectors and are the final owners/users of the trained model, while the CS has the authority to coordinate the FL training process. 



>### **2. An Overview of My Research**
<a id="overview"></a>  

<div style="float: right; margin-left: 20px; width: 45%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research-overview-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Overview of My Research.
</div>
</div>


Data heterogeneity among clients somewhat reflects their data complementarity. FL itself is a collaborative network of clients where a client $i$ is complemented by other clients $j$ with different weights $w_{i,j}$. One basic way that FL works is to aggregate the clients’ local model updates according to their weights. In cross-silo FL, clients are typically organizations or companies in the public or private sector. Wihout proper design, such collaborative networks can feature conflict of interest between clients (e.g., [competition](https://en.wikipedia.org/wiki/Coopetition)) and [free-riding](https://en.wikipedia.org/wiki/Free-rider_problem). Data heterogeneity entails evaluating the client weights effectively and building a personalized FL model for each client. 

It is predicted that, by around 2028, the amount of high-quality data that LLMs will require to continue to improve their performance will exceed what is publicly available. This amplifies the importance of FL, which enables collaborative model training across distributed private data sources without sharing raw data.


Currently, I focus on how to build a collaborative network of multiple clients, and the questions of my study include:
1. Free-riding, competition, and collaboration {% cite Wu24a Tan24a chen2024free %}
2. Quantifying data heterogeneity/complementarity {% cite chenvoronoi Li24a %}
3. Personalized federated learning {% cite Liu25a Guo24a %}
4. Federated foundation models

The first three questions are key to building an FL ecosystem in the case where clients are self-interested organizations or companies, while the fourth question is also important in the era of foundation models.



>### **3. Conlfict resolution: Competition, Free-riding, and Collaboration**
<a id="part1"></a>  

<span style="color: purple;">A series of our works initiated and advanced research of federated learning when competition exists between clients</span>, which is important since self-interested companies from the private sector are a key source of clients in cross-silo FL. 

>#### **3.1 Full competition between clients**


<div style="float: right; margin-left: 20px; width: 42%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Fig-FL-Compete.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    All clients are in the same market area.
</div>
</div>


We are <span style="color: blue;">the first to consider the case that all clients compete against each other</span> {% cite Wu24a %}. This occurs when all clients are in the same market area and provide the same service or product. In our study, we aim to maintain a negligible change in market share after clients join the FL ecosystem, and analyze the achievability of this objective. The classic marketing model of Rust \& Zahorik (1993) is used to model the market dynamics. We characterize the effect of FL on the model performance and the service quality of each client, which further affects the attractiveness of the service provided by this client. 

Formally, we introduce two notions of $\delta$-stable market and friendliness to measure the viability of FL and the market acceptability of FL. The client behaviours can be predicted using game theoretic tools (i.e., their optimal strategies concerning participation in FL). If the market $\delta$-stability is achievable, the final model performance improvement of each client shall be bounded, which relates to the market conditions of FL applications. We provide tight bounds and quantify the friendliness, $\kappa$, of given market conditions to FL. Experimental results show the viability of FL in a wide range of market conditions. 

---

>#### **3.2 Partial competition between clients**


<div style="float: right; margin-left: 20px; width: 33%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hospitals.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Clients are in multiple market areas.
</div>
</div>


We are also <span style="color: blue;">the first to consider the case that competition exists only in certain clients, rather than universally between any two clients</span> {% cite Tan24a %}. This occurs when organizations compete for the same population within a market area while others operate in different market areas. For example, hospitals can be clients and aim at improving public health. The hospital in city $C$ focuses exclusively on improving its own ML model, and its utility is independent of any client in other cities. Hospitals within the same city (e.g., city $B$) serve the same population; competition arises since these hospitals compete for patients and a hospital's utility is inversely proportional to another hospital's model performance. 

<div style="float: right; margin-left: 20px; width: 33%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Collaboration-Principle.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Collaboration principle: clients $i$ and $j$ compete; the solid arrow $x\rightarrow y$ indicates that client $y$ will utilize the model update information of $x$ in the FL training process. 
</div>
</div>

In this case, we extend the principle that "the friend of my enemy is my enemy" to construct the collboration relationship in the FL training propcess. Suppose clients $i$ and $j$ compete against each other. As illustrated in the right figure, client $i$ does not want to see others help its enemy $j$ and its enemy's friends. We give a polynomial-time heuristic algorithm to construct the collaboration relationships of clients that follow this extended principle {% cite Tan24a %}. 

In our recent work, we enhance the work of {% cite Tan24a %} by further incorporating concepts from Nash equilibrium to ensure each participant can achieve the best possible outcome without self-sacrifice - a critical feature desired by individuals in such systems. It reformulates the problem as a bi-level optimization and establishes conditions for optimal solutions through a novel application of topological dominance. Extensive experiments demonstrate the fairness and robustness of the proposed solution. This extended version will be submitted soon:

- <span style="color: blue;">Xiaohu Wu</span>, Han Yu, Mengmeng Chen, Tiantian He, Yew-Soon Ong, Qicheng Lao, Giuliano Casale. “Federated Learning with Competing Participants: Achieving Harmonious Collaboration with Minimal Self-Sacrifice.” To be submitted to JMLR. 

---

>#### **3.3 Free-riding, and partial competition**


Free-riding occurs when a client benefits from the contribution of other clients without making any contribution to the FL ecosystem. We consider both free-riding and partial competition among clients. Two principles are simultaneously used to meet the individual’s needs in such FL ecosystems: (1) a client can benefit from the FL ecosystem if and only if this client can benefit the FL ecosystem, and (2) a client will not contribute to its competitors as well as the allies of its competitors.


<div align="center">
<div style="width: 86%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Free-riding.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The main idea. 
</div>
</div>
</div>


We seek a proper problem formulation such that the resulting solution can well satisfy the clients’ needs and help them achieve the best possible ML model performances. All clients are partitioned into disjoint groups/coalitions, each with the common interest. We use theoretical tools from graph theory and propose an efficient solution, called FedEgoists, that can well satisfy the two principles above. Meanwhile, FedEgoists can help clients achieve the best possible ML model performances, i.e., subject to the two principles, the coalitions that FedEgoists finds are optimal in the sense that one coalition cannot increase the utility of any of its members by collaborating with any other coalitions {% cite chenvoronoi %}.


>### **4. Quantifying benefit strength via multi-task learning**
<a id="part2"></a>  


<div style="float: right; margin-left: 20px; width: 28%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/PHN.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A Pareto Hypernetwork $h(\cdot; \phi)$ receives an input preference ray $r$ and outputs the corresponding model parameters $\theta_{r}$. 
</div>
</div>


Multi-objective optimization (MOO) exists extensively in machine learning, and aims to find a set of Pareto-optimal solutions, called the Pareto
front, e.g., it is fundamental for multiple avenues of research in federated learning (FL). Pareto Front Learning (PFL) is a powerful method implemented using Hypernetworks (PHNs) to approximate the Pareto front. This method enables the acquisition of a mapping function from a given
preference vector to the solutions on the Pareto front. However, most existing PFL approaches still face two challenges: (a) sampling rays in
high-dimensional spaces; (b) failing to cover the entire Pareto Front which has a convex shape. Here, we introduce a novel PFL framework, called
as PHN-HVVS, which decomposes the design space into Voronoi grids and deploys a genetic algorithm (GA) for Voronoi grid partitioning within high-dimensional space {% cite chenvoronoi %}. We put forward a new loss function, which effectively contributes to more extensive coverage of the resultant Pareto front and maximizes the HV Indicator. Experimental results on multiple MOO machine learning tasks demonstrate that PHN-HVVS outperforms the baselines significantly in generating Pareto front. Also, we illustrate that PHN-HVVS advances the methodologies of several recent problems in the FL field.



>### **5. Personalized Federated Learning (pFL)**
<a id="part3"></a>  


A client $i$ is complemented by other clients $j$ with different weights $w_{i,j}$. One basic way of designing pFL schemes is to aggregate the clients’ local model updates according to their weights or data similarity. 


>#### **5.1 A data-similarity-based approach**

<div align="center">
<div style="width: 86%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FedSimSup.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The framework of FedSimSup. 
</div>
</div>
</div>

A crucial issue in federated learning is the heterogeneity of data across clients, which may lead to model divergence, eventually deteriorating the model performance. Personalized federated learning (pFL) has been shown to be an effective approach to addressing data heterogeneity in federated learning. However, many existing pFL studies rely on directly using the global model for local training without fully assessing its impact on the performance of the local model, resulting in a potential conflict between personalization and generalization. To address this issue, we propose a parallel structure of a local supervisor and an inter-learning model for the local model and introduce a novel pFL method called federated learning by considering data similarity across clients assisted by a local supervisor (FedSimSup). Specifically, FedSimSup maintains an inter-learning model for each client and refines the inter-learning model using a local supervisor for each client. The local supervisor monitors the aggregated global information and ensures that the inter-learning model aligns with the local heterogeneous data to enhance local model performance. Additionally, the similarity between clients is measured based on differences in local data distributions, and this similarity is used to adjust the weights of the inter-learning models. Experimental results show that FedSimSup outperforms eight state-of-the-art federated learning methods in handling heterogeneous data. Additionally, it supports different model architectures across clients, providing greater flexibility when computational resources vary among them. Please see  {% cite Liu25a %} for the details. 


>#### **5.2 A benchmarking study of statistical heterogeneity**


There is growing research interest in measuring the statistical heterogeneity of clients’ local datasets for personalized federated learning (pFL) models. Currently, these research endeavors are taking place in silos. We develop a comprehensive benchmark to study these various approaches {% cite Li24a %}. Our main contributions are as follows. Firstly, we summarize the six techniques (JS divergence, C-divergence, distribution sketch-based euclidean distance, Shapley Value, Hypernetworks, cosine similarity) into a unified framework to understand their application in FL settings. The unified framework clarifies the ways of quantifying the collaboration advantages among clients and the theoretical development of using collaboration advantages or data similarity for pFL. Secondly, we evaluate all six approaches under five standard Non-IID settings summarized in across eight widely-adopted benchmark datasets. We assess the performance of each approach in terms of computation cost, communication overhead and scalability. The results provide insights into which approaches are advantageous under which settings. Thirdly, the unified framework and the experimental results identify scenarios where the current approaches perform relatively poorly, highlighting promising future research directions for collaborative pFL. The study here motivates our work in {% cite chenvoronoi Li24a %}. 


<div style="float: right; margin-left: 20px; width: 42%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pFedGraph.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The main idea of pFedGAT.
</div>
</div>




>#### **5.3 pFedGAT: An approach using graph neural networks**


Building on our previous work on graph neural networks (GNNs) {% cite he2024polarized %} , my collaborators and I have also proposed a pFL scheme where the weights are learned by GNNs {% cite Zhou25pa %}.



>### **6. Federated foundation models**
<a id="part4"></a>  


<div align="center">
<div style="width: 86%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SFedLoRA.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The framework of SFed-LoRA. 
</div>
</div>
</div>

Large Language Models (LLMs) have become pivotal in natural language processing. Traditional full fine-tuning is impractical, prompting the adoption of Parameter-Efficient Fine-Tuning (PEFT) methods like Low-Rank Adaptation (LoRA), which reduces trainable parameters using low-rank matrices $A$ and $B$. However, in real-world scenarios with distributed data across institutions, privacy constraints necessitate Federated Learning (FL), with recent integrations like FedIT exploring LoRA in this context. Despite progress, the stability of LoRA-based fine-tuning in federated settings remains challenged by gradient collapse at higher ranks, a limitation of the conventional scaling factor $\gamma_r = \frac{\alpha}{r}$, even with improvements from rsLoRA ($\gamma_r = \frac{\alpha}{\sqrt{r}}$) in standalone settings. This paper introduces Stabilized Federated LoRA (SFed-LoRA), a novel framework that enhances the stability and performance of LoRA fine-tuning in federated environments. We propose an optimal scaling factor $\gamma_z = \alpha\sqrt{\frac{N}{r}}$, derived theoretically to counteract aggregation-induced instability across $N$ clients. SFed-LoRA preserves LoRA’s adapter structure without increasing inference latency, offering a robust solution to mitigate federated aggregation effects. Extensive experiments demonstrate the superiority of our method in achieving stable, high-performance LLM fine-tuning.

- Jiayu Huang (<span style="color: blue;">my student</span>), Xiaohu Wu, Qicheng Lao, Guanyu Gao, Tiantian He, Yew-Soon Ong, Han Yu. "Stabilized Fine-Tuning with LoRA in Federated Learning: Mitigating the Side Effect of Client Size and Rank via the Scaling Factor." Submitted.

