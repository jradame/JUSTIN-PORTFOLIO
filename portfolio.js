// portfolio.js
class Portfolio {
  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.render());
    } else {
      this.render();
    }
  }

  render() {
    this.renderPersonalInfo();
    this.renderSocialLinks();
    this.renderSkills(); // Make sure this is here
  }

  renderPersonalInfo() {
    const heroTitle = document.querySelector('.about-me__info--title');
    if (heroTitle) {
      heroTitle.innerHTML = `Hey! I'm <span class="text--red">${this.data.personal.name.split(' ')[0]}</span>`;
    }

    const heroBio = document.querySelector('.about-me__info--para');
    if (heroBio) {
      heroBio.innerHTML = `${this.data.personal.bio.split('.')}. <strong class="text--red">${this.data.personal.bio.split('.')[1]}.</strong> ${this.data.personal.bio.split('.').slice(2).join('.')}`;
    }
  }

  renderSocialLinks() {
    const socialContainer = document.querySelector('.about-me__links');
    if (socialContainer) {
      socialContainer.innerHTML = this.data.personal.socialLinks.map(link => `
        <a href="${link.url}" class="about-me__link" target="_blank" aria-label="${link.platform}">
          <i class="${link.icon}"></i>
        </a>
      `).join('');
    }
  }

  renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      skillsContainer.innerHTML = this.data.skills.map(skill => `
        <div class="skill-item">
          <i class="${skill.icon}"></i>
          <span class="skill-name">${skill.name}</span>
        </div>
      `).join('');
    }
  }
}

