import chai from 'chai';
import spies from 'chai-spies';
import util from '../testUtil';

chai.use(spies);
const expect = chai.expect;

describe('n-show directive', function() {
  const nShow = require('../fixtures/directive/n-show.jsx');

  it('should render n-show when value is true', function() {
    const rendered = util.render(nShow, { condition: true, show: true });
    expect(rendered).to.contain('<p id="wrap" name="wrap" class="wrap">');
    expect(rendered).to.contain(' style="display:none">');
    expect(rendered).not.to.contain('<p style="display:none"');
  });

  it('should render n-show when value is false', function() {
    const rendered = util.render(nShow, { show: false });
    expect(rendered).to.contain(' style="display:none">');
    expect(rendered).not.to.contain(' style="display:block">');
  });
});

describe('n-style directive', function() {
  const nStyle = require('../fixtures/directive/n-style.jsx');

  it('should render n-style when value is string', function() {
    const rendered = util.render(nStyle, { condition: true });
    expect(rendered).to.contain('<input style="margin:0;padding-left:15px"');
    expect(rendered).not.to.contain('<input style="display:none" class=');
  });

  it('should render n-style when value is string template', function() {
    const rendered = util.render(nStyle);
    expect(rendered).to.contain('<input style="margin:10px;padding-left:15px"');
    expect(rendered).not.to.contain('<input style="display:none" class=');
  });
});

describe('n-mobxBind directive', function() {
  const MobxBindTest = require('../fixtures/directive/n-mobxBind.jsx').MobxBindTest;

  it('should render n-mobxBind', function() {
    const rendered = util.render(MobxBindTest);
    expect(rendered).to.contain('<input value="test"/>');
  });
});

describe('n-mobxField directive', function() {
  const MobxFieldTest = require('../fixtures/directive/n-mobxField.jsx').MobxFieldTest;
  const MobxFieldNoBindTest = require('../fixtures/directive/n-mobxField-noBind.jsx').MobxFieldTest;

  it('should render n-mobxField', function() {
    const rendered = util.render(MobxFieldTest);
    expect(rendered).to.contain('<input type="text" value="joe_sky" class="ant-input"/>');
  });

  it('should render n-mobxField-noBind', function() {
    const rendered = util.render(MobxFieldNoBindTest);
    expect(rendered).to.contain('<input type="text" value="joe_sky" class="ant-input"/>');
  });
});
