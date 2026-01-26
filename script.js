const gradients = [
    'linear-gradient(90deg, rgb(118, 91, 167), rgb(115, 111, 76))',
    'linear-gradient(90deg, #FA4616, #485cc7)',
    'linear-gradient(90deg, #00a9e0, #f93822)',
    'linear-gradient(90deg, #f57eb6, #584446)',
    'linear-gradient(90deg, #f984ca, #949300)',
    'linear-gradient(90deg, #eddc4d, #796e65)',
    'linear-gradient(90deg, #9a9bd4, #7c7e7f)',
    'linear-gradient(90deg, #d6e2f2, #70ab37)',
    'linear-gradient(90deg, #9c97a8, #758448)',
    'linear-gradient(90deg, #da291c, #686869)',
  ];
  
  let index = 0;
  const container = document.querySelector('.container');
  
  container.addEventListener('click', () => {
    index = (index + 1) % gradients.length;
    container.style.background = gradients[index];
  });
  