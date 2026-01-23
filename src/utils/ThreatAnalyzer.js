export class ThreatAnalyzer {
  static analyze(responses, reactionTimes, userBehavior = {}) {
    const correctCount = responses.filter(r => r.correct).length;
    const accuracy = (correctCount / responses.length) * 100;
    const avgReactionTime = reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length;

    let riskScore = 0;
    
    riskScore += (100 - accuracy) * 0.5;
    
    if (avgReactionTime > 5000) riskScore += 30;
    else if (avgReactionTime > 3000) riskScore += 20;
    else if (avgReactionTime > 2000) riskScore += 10;
    else if (avgReactionTime < 1000) riskScore += 5;
    
    const hasPattern = this.detectPattern(responses);
    if (hasPattern) riskScore += 20;

    if (userBehavior.hesitationCount > responses.length / 2) {
      riskScore += 10;
    }

    const strengths = [];
    if (accuracy >= 80) strengths.push('High threat recognition accuracy');
    if (avgReactionTime < 3000 && avgReactionTime > 1000) {
      strengths.push('Optimal decision-making speed');
    }
    if (this.checkPhishingDetection(responses)) {
      strengths.push('Strong phishing detection capabilities');
    }
    if (this.checkAuthorityVerification(responses)) {
      strengths.push('Proper authority verification protocols');
    }
    if (!hasPattern) {
      strengths.push('Adaptive response patterns');
    }
    if (userBehavior.quickDecisions > 0 && accuracy > 70) {
      strengths.push('Confident and accurate under pressure');
    }

    const weaknesses = [];
    if (accuracy < 60) {
      weaknesses.push('Difficulty identifying sophisticated threats');
    }
    if (avgReactionTime > 5000) {
      weaknesses.push('Slow reaction to urgent threats');
    }
    if (avgReactionTime < 1000) {
      weaknesses.push('Impulsive decision-making without proper analysis');
    }
    if (hasPattern) {
      weaknesses.push('Predictable response patterns');
    }
    if (!this.checkPhishingDetection(responses)) {
      weaknesses.push('Vulnerable to phishing attacks');
    }
    if (!this.checkAuthorityVerification(responses)) {
      weaknesses.push('Vulnerable to authority impersonation');
    }
    if (userBehavior.hesitationCount > responses.length / 2) {
      weaknesses.push('Excessive hesitation increases vulnerability window');
    }

    const threatTypes = this.analyzeThreatTypes(responses);

    return {
      riskScore: Math.round(Math.min(100, riskScore)),
      accuracy,
      avgReactionTime,
      strengths,
      weaknesses,
      threatTypes,
      behaviorProfile: this.generateBehaviorProfile(responses, reactionTimes, userBehavior)
    };
  }

  static detectPattern(responses) {
    if (responses.length < 3) return false;
    
    const actions = responses.map(r => r.action);
    const uniqueActions = new Set(actions);
    
    let alternating = true;
    for (let i = 1; i < actions.length; i++) {
      if (actions[i] === actions[i - 1]) {
        alternating = false;
        break;
      }
    }
    
    return uniqueActions.size === 1 || alternating;
  }

  static checkPhishingDetection(responses) {
    const phishingResponses = responses.filter(r => 
      r.threatType === 'phishing' || r.threatType === 'malicious_link'
    );
    if (phishingResponses.length === 0) return true;
    
    const correctPhishing = phishingResponses.filter(r => r.correct).length;
    return correctPhishing / phishingResponses.length >= 0.7;
  }

  static checkAuthorityVerification(responses) {
    const authorityResponses = responses.filter(r => r.threatType === 'authority');
    if (authorityResponses.length === 0) return true;
    
    return authorityResponses.every(r => r.correct);
  }

  static analyzeThreatTypes(responses) {
    const types = {};
    responses.forEach(r => {
      if (!types[r.threatType]) {
        types[r.threatType] = { total: 0, correct: 0 };
      }
      types[r.threatType].total++;
      if (r.correct) types[r.threatType].correct++;
    });

    return Object.entries(types).map(([type, data]) => ({
      type,
      accuracy: (data.correct / data.total) * 100,
      total: data.total
    }));
  }

  static generateBehaviorProfile(responses, reactionTimes, userBehavior) {
    const avgReactionTime = reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length;
    
    let profile = {
      decisionStyle: '',
      riskTolerance: '',
      verificationHabit: '',
      overallApproach: ''
    };

    if (avgReactionTime < 2000) {
      profile.decisionStyle = 'Quick and decisive';
    } else if (avgReactionTime < 4000) {
      profile.decisionStyle = 'Balanced and thoughtful';
    } else {
      profile.decisionStyle = 'Cautious and deliberate';
    }

    const ignoreCount = responses.filter(r => r.action === 'ignore').length;
    const verifyCount = responses.filter(r => r.action === 'verify').length;
    
    if (ignoreCount > verifyCount * 2) {
      profile.riskTolerance = 'Risk-averse';
    } else if (verifyCount > ignoreCount * 2) {
      profile.riskTolerance = 'Verification-focused';
    } else {
      profile.riskTolerance = 'Balanced risk assessment';
    }

    if (verifyCount > responses.length / 2) {
      profile.verificationHabit = 'Strong verification instinct';
    } else {
      profile.verificationHabit = 'Needs more verification practice';
    }

    const accuracy = (responses.filter(r => r.correct).length / responses.length) * 100;
    if (accuracy >= 80 && avgReactionTime < 3000) {
      profile.overallApproach = 'Expert: Fast and accurate';
    } else if (accuracy >= 70) {
      profile.overallApproach = 'Competent: Good threat awareness';
    } else if (accuracy >= 50) {
      profile.overallApproach = 'Developing: Needs more practice';
    } else {
      profile.overallApproach = 'Vulnerable: Requires immediate training';
    }

    return profile;
  }
}
