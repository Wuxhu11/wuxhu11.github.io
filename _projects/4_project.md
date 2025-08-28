---
layout: page
title: Miscellaneous
description: Mathematical optimization, algorithmic game theory, information security
img: assets/img/miscellaneous.png
importance: 3
category: work
related_publications: true
---



### **Table of Contents**  
- [Discrete optimization for parallel computing](#DOPC)  
- [Network economics](#AGT)
- [Homomorphic encryption](#HE)




>### **Discrete optimization for parallel computing**
<a id="DOPC"></a>  


<div style="float: right; margin-left: 20px; width: 45%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approximation-ratio.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Performance guarantee $\rho$ in approximation algorithms for a minimization problem.
</div>
</div>


In this area, my past efforts were devoted to **the design and analysis of approximation algorithms**. Approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.




>#### **Scheduling Moldable Tasks**


Moldable tasks allow schedulers to determine the number of processors assigned to each task, thus enabling efficient use of large-scale parallel processing systems. We consider the problem of scheduling independent moldable tasks on processors and propose a new perspective of the existing speedup models: as the number $p$ of processors assigned to a task increases, the speedup is linear if $p$ is small and becomes sublinear after $p$ exceeds a threshold. Based on this, we propose an efficient approximation algorithm to minimize the makespan {% cite Wu23b %}. As a by-product, we also propose an approximation algorithm to maximize the sum of values of tasks completed by a deadline; this scheduling objective is considered for moldable tasks for the first time while similar works have been done for other types of parallel tasks.


<div align="center">
<div style="width: 62%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moldable.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Open Problem. 
</div>
</div>
</div>



>#### **Scheduling Malleable Tasks**

Due to the ubiquity of batch data processing, the related problems of scheduling malleable batch tasks have received significant attention. We consider a fundamental model where a set of tasks is to be processed on multiple identical machines and each task is specified by a value, a workload, a deadline and a parallelism bound. Within the parallelism bound, the number of machines assigned to a task can vary over time without affecting its workload. In this paper, we identify a boundary condition and prove by construction that a set of malleable tasks with deadlines can be finished by their deadlines if and only if it satisfies the boundary condition. This core result plays a key role in the design and analysis of scheduling algorithms: (a) when several typical objectives are considered, such as social welfare maximization, machine minimization, and minimizing the maximum weighted completion time, and, (b) when the algorithmic design techniques such as greedy and dynamic programming are applied to the social welfare maximization problem. As a result, we give four new or improved algorithms for the above problems  {% cite Wu15a Wu24b %}.


>### **Network economics**
<a id="AGT"></a>  

Previously, I mainly focused on service design, pricing and operations, with the objective of achieving revenue maximization, high service usability, and incentive compatibility. The main theoretical tools or approaches used include algorithmic game theory, queueing theory {% cite Hyytia17a %}, auctions {% cite Cheng23a %}, service differentiation, and analyitical modeling. Service design is the activity of planning and arranging infrastructure, communication and material components of a service in order to improve its quality, and the interaction between the service provider and its users. Usability refers to the measurement of how easily a user can accomplish their goals when using a service. In algorithmic game theory, a mechanism is called incentive-compatible (IC) if every participant can achieve their own best outcome by reporting their true preferences. My main applicaiton area is public cloud services, and I aimed to improve the interaction process between a service provider and its users for increased provider’s revenue and resource efficiency and better users’ experience {% cite Wu19b Wu23a %}.


>### **Homomorphic encryption**
<a id="HE"></a>  

Homomorphic encryption is a form of encryption that allows computations to be performed on encrypted data without first having to decrypt it. The resulting computations are left in an encrypted form which, when decrypted, result in an output that is identical to that of the operations performed on the unencrypted data. My research focused on designing novel homomorphic encryption schemes in the context of linear network coding {% cite Wu11a Wu13a %}.


